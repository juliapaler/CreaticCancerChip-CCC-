# Creatic Cancer Chip  - CCC
Pancreatic cancer, specifically Pancreatic ductal adenocarcinoma (PDAC) is an extremely harmful disease that has a survival rate of ~10% after 5 years of being diagnosed [1]. It is important that clinicians are able to diagnose the disease as early as possible for effective treatment. There are no useful biomarkers for detection in its the cancer's early stages; **however,** a recent study has found a promising panel of biomarkers for earlier detection using urine analysis [1].

Enter Creatic Cancer Chip (CCC), our medical device incorporates an end-to-end microfluidic lab on a chip that takes a urine sample and runs a full laboratory analysis.
We use standard ELISA assays with fluorophore conjugated antigens in a spinning chamber for the reaction. We then use machine learning algorithms to determine a predictive diagnosis in order to guide clinicians to early measure treatment options. All of the inferences/patient data are then sent to our webapp and stored on our CockroachDB database for secure and safe storage.

## Inspiration
I was reading papers and thought this was cool.

## Demo
[Try out the webserver!](https://www.youtube.com/watch?v=6n3pFFPSlW4)

## Built with
- Tensorflow (TF) / TF Keras API
- Node.js
- CockroachDB

## Installation
### Node.js 
```
git clone https://github.com/juliapaler/CreaticCancerChip-CCC-.git
```
```
cd ./CreaticCancerChip-CCC-
```
```
npm install
```
```
node app.js
```

### Python
```
pip install virtualenv
```
```
virtualenv env
```
```
env\scripts\activate
```
```
pip install requirements.txt
```

Then you can run data visualization by running `python data_viz.py` in the command shell of your OS. Run training of the ML model with `train.py`. Run inferences with `test.py`. 


## Results
WIP

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## References
1. S. Debernardi, H. O’Brien, A. S. Algahmdi, N. Malats, G. D. Stewart, M. Plješa-Ercegovac, E. Costello, W. Greenhalf, A. Saad, R. Roberts, A. Ney, S. P. Pereira, H. M. Kocher, S. Duffy, O. Blyuss, and T. Crnogorac-Jurcevic, “A combination of urinary biomarker panel and PancRISK score for earlier detection of pancreatic cancer: A case–control study,” PLOS Medicine, vol. 17, no. 12, 2020. 
