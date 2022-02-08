
export class systemConnections{
    constructor() {
    }
    
     async connectionAsync(querymodel) {
       this.url = querymodel.url;
       this.datapackage = querymodel.datapackage;
       this.format = querymodel.format;
         let res = await fetch(this.url, {
                                 method: 'POST',
                                 mode: 'no-cors',
                                 cache: 'no-cache',
                                 /*credentials: 'omit',*/
                                 headers: {
                                     'Content-Type': 'application/json'
                                 },
                                    body: JSON.stringify(this.datapackage)
                             });
 
         if (res) {
             if (this.format == 'json') {
                 return await res.json();
             }else if (this.format == 'text') {
                 return await res.text();
             }
         }else{
             return `Error: ${res.status}`;
         }
     }
 }
 
 
 
      
 