import sys
import pandas as pd
import joblib

GENRES = ['Classical', 'Country', 'EDM', 'Folk', 'Gospel', 'HipHop', 'Jazz',
       'KPop', 'Latin', 'Lofi', 'Metal', 'Pop', 'RNB', 'Rap', 'Rock',
       'VideoGameMusic']

RATINGS = ['Sometimes', 'Very frequently']
args = sys.argv


input_dict = {}
user_input = args[1].split(',')
for item in user_input:
    key_vals = item.split(":")
    k = key_vals[0]
    v = key_vals[1]
    if not v.isalpha():
        v = float(v)

    input_dict[k] = [v]

# input_dict = {'Age': [18.0], 'HoursPerDay': [3.0], 'WhileWorking': [1],'Instrumentalist':[1],'Composer':[0], 'Exploratory':[1], 'ForeignLanguages':[1], 'Anxiety': [4.0], 'Depression': [4.0], 'Insomnia': [3.0], 'OCD': [5.0], 'FavGenre': 'KPop'}

input_df = pd.DataFrame(input_dict, columns=input_dict.keys())
input_df = input_df.drop(columns=["FavGenre"])

one_hot_fav = {g:[0.0] for g in GENRES}
one_hot_fav[input_dict["FavGenre"][0]] = 1.0
for genre in one_hot_fav:
    input_df[genre] = one_hot_fav[genre]


model = joblib.load('../models/music_predictor.joblib')
prediction = model.predict(input_df)
prediction = pd.DataFrame(prediction, columns=GENRES).T
prediction.columns = ['rating']
prediction['genre'] = prediction.index

best = prediction[prediction.rating.isin(RATINGS)]['genre'].values.tolist()
for item in best:
    print(item)

