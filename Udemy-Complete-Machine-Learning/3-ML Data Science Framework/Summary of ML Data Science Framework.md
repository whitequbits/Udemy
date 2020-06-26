# Summary of Data Science Framework

[Element of AI: AI for beginner](https://www.elementsofai.com)

- Perfect model never exist

## Data Science Workflow

1. Static Data
2. Jupyter
3. Pandas (Data Analysis)
4. Matplotlib (Visualization)
5. ML model (Scikit Learn)

## 6 Step of ML Framework

1. Problem Definition (Supervised, Unsupervised, Classification, Regression)
2. Data (Structured => row column, Unstructured => image, audio)
3. Evaluation (aim for evauation metrics)
4. Features (what do we know about data)
5. Modelling (what model should we use)
6. Experimentation (what can we improve)

### Type of ML

- Supervised (classification, regression)
- Unsupervised (to know the pattern)
- Transfer Learning (create foundation of model from other model)
- Reinforcement Learning (punishment-award system)

#### When shouldn't you use ML

- If you know the step and problem don't use ML

### Type of Data

- Structured (Relational data with similar format)
- Unstructured (Email, Audio, Image)
- Static (don't change like in csv)
- Streaming (Constantly change)

### Type of Evaluation

How well ML model?

- Accuracy = Mean Absolute Error (Regression), Precision at K (Recommendation)
- Precision = Mean Squared Error (Regression)
- Recall = Root Mean Squared Error (Regression)

### Features Data

- Feature variable is used to predict target variable
- Numerical or categorical feature

### Modelling - Splitting Data

- Train, Validation, Test split
- Unseen data is good
- You don't want your model become memorizing

### Modelling - Picking the Model

- Structured Data => CatBoost, dmicXGBoost, random forest
- You might start small (training with less amount of data) because training time is important
- Some model work better than others on different problem
- Don't be afraid try things

### Modelling - Tuning

- hyperparameter can be adjusted
- tuning can take place in training or validation
- model first result aren't its last

### Modelling - Comparison

- Model should not underfitting (data mismatch) or overfitting (data leakage)
- Model should toward generality
- Balanced (Goldilocks zone) is the best for production
- Kept test set seperately
- Compare apple to apple

#### Fixing underfitting

- try more advance model
- increase model hyperparameter
- reduce amount of features
- train longer

#### Fixing overfitting

- collect more data
- try a less advance model

### Experimentation

- Always trial and error
- there is no best model
