# TP5_architecture_microservice

1- Customer service:

* customer database:

![782c3b89-a5cf-4c17-9f38-ae79b4b00cbd](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/c1dacc65-e1c8-4371-b2af-df1936149ac2)

* customers en utilisant spring data REST:

![f32d017b-41e2-48c3-9aa8-1749731b40bc](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/1d812a5b-7211-44d0-9216-5a19f69c6e39)


2- Inventory service

* product database:

![c45028ac-8e98-4190-a10e-696b12753724](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/bf09e431-bb58-4935-8cfd-787fce152f13)

* products en utilisant spring data REST:

![9cbce92e-7469-4f93-82d7-db73d1372d19](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/349449a0-d6e7-43cd-a08b-abc839a33946)



3- Gateway

maintenant, avec gateway on va communiquer avec deux micro service

![5da8a3f3-11a7-4774-84f6-1e2e775a677a](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/2075e9e0-e4b6-49a4-b7fa-6a06650faedf)

* le port 8083 pour gateway, on demande a la gateway le product service :

![5da8a3f3-11a7-4774-84f6-1e2e775a677a](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/46876aca-f825-40cc-a551-afbda744d9c2)



4- Eureka discovery

![29568af3-fbd6-4a3c-91f5-5c32901e7758](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/a0e51de3-12fd-4aba-b4b5-a13de10cbd61)


on va connecté les micro services de manière dynamique, les micro services sont bien configuré dynamiquement. 
Ici c'est le path PRODUCT-SERVICE/products
![4f837fa6-a66b-4def-bf36-2dd26367a32d](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/2166b89a-1774-47f8-9e15-16513cd43d8f)


http://localhost:8083/CUSTOMER-SERVICE/customers
![07d50c4e-3c8c-47c0-b683-6bcd6e240dea](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/23a3543b-abf9-4e13-a636-d0c8d60f04bb)



5- Billing service

* billing database:

![dde59fbc-cfb1-4460-a0dd-4939ed456af3](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/acc677ee-5b62-48d3-869e-4b37360459c0)


* ProductItem database:

![49b864fe-3628-4c34-a1d2-e44f1419d9c3](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/a7ac6ba5-4868-4350-a6e8-a895d83eeb0c)


find bill by id=1, en consultant la gateway

![20576557-fc2c-4941-b5bb-6b44839029db](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/f35d2700-7509-4db1-ae7a-26db1b3194e9)


connecte les products de micro-service product et stocke dans bill

![5f6e2aa2-7e11-4556-b3c5-00321d051812](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/9f84693e-977e-49d3-9b08-924266c2438e)



6/ angular front-end

* afficher les produits
 
![0bd64d1d-940f-45ba-a6a4-740c8ea25c6a](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/2b92f23e-76c1-46c5-8657-71983c9fe859)


* afficher customers

![19fc30b1-cbf9-4973-870a-dc15d44cb53b](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/81fa1f6d-dabe-4935-8cb0-25a8273c5670)


* bill of customer1

![2db74262-3f96-4e8e-90f3-2fccffd2abd1](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/b8a4346f-b987-41bd-85a8-53aac74dd98f)


* productItems of bill1

![d8eb046e-1e2c-4212-b0ae-88a90fdcfd96](https://github.com/youssefelgoumri/SD_TP5/assets/94170257/cb3de11b-6622-43be-bb0d-cfc4f17428d3)

