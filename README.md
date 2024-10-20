## Github Static Website of Lufthansa Cargo CL

#### Quote

> Coreiso Logistics, a well-known logistics solution provider, announced that it has successfully created a new static website for Lufthansa Cargo, an air cargo company under the Lufthansa Group, and deployed it on the Github.io platform. This measure not only showcases Coreiso Logistics' technological strength in the logistics industry, but also further consolidates its partnership with Lufthansa Cargo.
>
> In terms of deployment, Coreiso Logistics has chosen Github.io, a well-known platform. Github.io not only provides stable and reliable hosting services, but also supports custom domain names and HTTPS encryption, further enhancing the security and credibility of the website.
>
> The successful creation and deployment of a static website is an important milestone in the collaboration between Coreiso Logistics and Lufthansa Cargo. It not only showcases Coreiso Logistics' technological strength and innovative spirit in the logistics industry, but also lays a solid foundation for future in-depth cooperation between the two parties. In the future, Coreiso Logistics will continue to leverage its technological advantages and innovative experience in the logistics industry to provide Lufthansa Cargo with more high-quality and efficient logistics service solutions.
>
> At the same time, this cooperation also reflects the strong strength and wide application of Github.io platform in static website hosting. As more and more businesses and individuals choose to deploy their static websites on Github.io, the platform will continue to leverage its stable, reliable, and easy-to-use features to provide high-quality hosting services for more users.



#### Instructions

This website uses json files to update website content.
Update Method:

> Step1: Understand the file structure of web pages
>
> ```
> - index.html
> - [sources]
> 	- [bootstrap]
> 		- bootstrap.min.js
> 		- - -
> 	- [fonts]
> 		- LufthansaHeadWeb-Bold.woff2
> 		- - -
> 	- [images]
> 		- banner-image-1.jpg
> 		- - -
> 	- [pages]
> 		- index.css
> 		- - -
> 	- [content]
> 		- [carousels]
> 			- carousel1.json
> 			- carousel2.json
> 			- carousel3.json
> 			- carousel4.json
> 		- [announce]
> 			- announce.json
> 			- notice.json
> 		- weekly-schedule.json
> ```
>
> The focus is on **the content folder**, which contains many json files with different meanings, as can be seen from their file names.
>
> - **announce**
>
>   announce.json (index.html)
>
>   Please write the JSON file according to the following standards
>
>   ```json
>   {
>       "title": " ... ",
>       "subtitle": " ... "
>   }
>   ```
>
>   The length of the title should not exceed 15 words, and the length of subtitle should not exceed 25 words.
>
>   Each line is written strictly according to the above standards to meet our requirements.
>
>   ---
>
>   notice.json (notice.html)
>
>   Please write the JSON file according to the following standards
>
>   ```json
>   {
>       "title": " ... ",
>       "li1": " ... ",
>       "li2": " ... ",
>       "li3": " ... ",
>       "li4": " ... "
>   }
>   ```
>
>   The length of the title should not exceed 15 words, and the length of each li should not exceed 30 words.
>
>   Each line is written strictly according to the above standards to meet our requirements.
>
> - **carousels**
>
>   Please write the JSON file according to the following standards
>
>   ```json
>   {
>       "title": " ... ",
>       "subtitle": " ... ",
>       "image": " example.jpg / example.png / ..."
>   }
>   ```
>
>   The length of the title should not exceed 25 words, and the length of subtitle should not exceed 95 words
>
>   Each line is written strictly according to the above standards to meet our requirements.
>
>   Please put the image resources in the **images folder**.
>
> - weekly-schedule.json
>
>   Please write the JSON file according to the following standards
>
>   ```json
>   {
>       "MON":{
>           "FLT-1":{
>               "STR": "",
>               "TER": "",
>               "DUR": "",
>               "COM": ""
>           },
>           "FLT-2":{
>               "STR": "",
>               "TER": "",
>               "DUR": "",
>               "COM": ""
>           },
>           "FLT-3":{
>               "STR": "",
>               "TER": "",
>               "DUR": "",
>               "COM": ""
>           },
>           "FLT-4":{
>               "STR": "",
>               "TER": "",
>               "DUR": "",
>               "COM": ""
>           },
>           "FLT-5":{
>               "STR": "",
>               "TER": "",
>               "DUR": "",
>               "COM": ""
>           },
>           "FLT-6":{
>               "STR": "",
>               "TER": "",
>               "DUR": "",
>               "COM": ""
>           }
>       }.
>       {...}
>   }
>   ```
>   
>This JSON data structure covers flight information for a total of seven days from Monday to Sunday. Each day can accommodate up to six flights (marked as FLT-1 to FLT-6), with FLT-5 and FLT-6 designated as backup flights for future use.
>   
>For each flight, the following key information needs to be manually entered:
>   
>- Starting Location (STR): Detailed record of the departure location of the flight.
>   - Terminus (TER): Clearly identify the destination of the flight.
>   - Duration (DUR): Accurately record the length of flight time for a flight.
>   - Comments (COM): Used to record any additional information or explanations related to a flight.
>   
>Each line is written strictly according to the above standards to meet our requirements.



&COPY; Lufthansa Cargo CL 2024

© 2024 Deutsche Lufthansa AG. All rights reserved. Unless otherwise stated, all content on this website (including but not limited to text, images, videos, audio files, and software) is the property of Deutsche Lufthansa AG or its licensors and is protected by copyright law. Without explicit written permission from Deutsche Lufthansa AG, no content on this website may be copied, distributed, displayed, or otherwise used