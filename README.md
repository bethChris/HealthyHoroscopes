# Healthy Horoscopes
Healthy Horoscopes is a mental wellness app designed to provide helpful resources for improving state of mind. It utilizes machine learning models to provide affirmation feedback, personalized activity and music recommendations to help improve mental health. Other resources provided in this application are suicide prevention hotline information, campus resources, links to guided meditations, a journal and a daily positive horoscope. 

This project was brainstormed, designed and implemented for HackUSU 2024.

## Table of Contents
- [Set Up](#set-up)
  - [Requirements](#requirements)
  - [Installing Dependencies](#installing-dependencies)
  - [Additional Files](#additional-files)
- [Running the Project](#running-the-project)
  - [Backend](#run-the-backend)
  - [Frontend](#run-the-frontend)
- [Development](#development)
  - [Design Tools](#design-tools)
  - [Stack Overview](#stack-overview)
- [Sources](#sources)
  - [Mental Health Resources](#mental-health-resources)
  - [Image Attribution](#image-attribution)
  - [ML Datasets](#ml-datasets)


## Set Up
### Requirements:
  - [Python](https://www.python.org/downloads/) 3.1x
  - [Node.js](https://nodejs.org/en/download)
  - [Pandas](https://pandas.pydata.org/getting_started.html)
  - [joblib](https://joblib.readthedocs.io/en/stable/installing.html)
  - [scikit-learn](https://scikit-learn.org/stable/install.html)==1.3.1


You can install some of these via: 
```bash
$ pip/pip3 install pandas joblib scikit-learn==1.3.1
```
or
```bash
$ pip/pip3 install -r requirements.txt
```

### Installing Dependencies
Starting in the root directory:

```bash
$ cd healthyhoroscopes
```

Install dependencies for the frontend:

```bash
$ npm install
```

Navigate to the backend folder and install dependencies for the backend:

```bash
$ cd backend
$ npm install
```
### Additional Files
To run certain parts of this project, you'll need to create the `.env` files for specifying the ports and API keys. You'll have to source your API keys from:

- https://supabase.com/ 
- https://gemini.google.com/app  

You'll need 2 `.env` files, one inside the `/backend` folder for the Gemini API key and port for the backend server. And then another one inside the `/healthyhoroscopes` for the Supabase API key and port for the frontend.

## Running the Project
This will require dual hosting the backend and the frontend so they can talk to eachother. Open up two terminals, run frontend on one and backend on the other.

### Run the backend:

```bash
$ cd backend
$ npm run dev
```

### Run the frontend:
(from root directory)

```bash
$ npm start
```

## Development

### Design Tools
[Wireframes](https://www.figma.com/file/IuSJoix7ImN4JmFpyI25Cu/HackUSU-2024?type=design&node-id=0%3A1&mode=design&t=Bh2UIl73O9gClTaM-1)

### Stack Overview
- Database: Superbase
- Frontend: React.js
- Backend: Express.js (typescript)
- ML Models: Python w/ Scikit-Learn


## Sources

### Mental Health Resources
- Benefits of journaling: https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1#:~:text=Journaling%20helps%20control%20your%20symptoms,and%20identifying%20negative%20thoughts%20and
- Mental health resources:
  - https://www.usu.edu/aggiewellness/
  - https://www.cdc.gov/mentalhealth/tools-resources/index.htm
  - https://www.nimh.nih.gov/health/find-help
- Benefits of meditation: https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858#:~:text=Meditation%20can%20give%20you%20a,centered%20and%20keep%20inner%20peace.
- Guided meditations:
  - https://www.youtube.com/watch?v=uTN29kj7e-w
  - https://www.youtube.com/watch?v=ZToicYcHIOU
  - https://www.youtube.com/watch?v=ssss7V1_eyA
  - https://www.youtube.com/watch?v=vj0JDwQLof4
  - https://www.youtube.com/watch?v=DaHH--jJBtg

### Image Attribution

- Background zodiac: https://static.vecteezy.com/system/resources/thumbnails/029/145/582/small_2x/astrology-wheel-with-zodiac-signs-vintage-frame-divine-magic-hand-drawn-antique-illustration-png.png
- Background stars: https://www.pngall.com/wp-content/uploads/15/Gold-Sparkle-PNG-Picture.png
- Favicon: <a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Freepik - Flaticon</a>

### ML Datasets
The joblibs are already stored for the models in this project so no need to worry about downloading the datasets to run the project. However, if you'd like to see the datasets we chose and run them yourself in our notebooks you can view the datasets at the sources below:

- Music and Mental Health dataset: https://www.kaggle.com/datasets/catherinerasgaitis/mxmh-survey-results

- Emotions dataset: https://www.kaggle.com/datasets/nelgiriyewithana/emotions/data?select=text.csv 
