import https from "https";
import http from "http";
import fs from 'fs';



const getAndWriteFile = (fileSystemWS : fs.WriteStream, url : string ) => {
	const regexpProtocol = /^(\w+):\/\//,
		matchArray : Array<string> | null = url.match(regexpProtocol),
		protocol : string = matchArray ? matchArray[1].toLowerCase() : "";
		
		switch( protocol ){
			case 'http' :
				const httpRequest = http.get(url, (response : any) => {
					response.pipe(fileSystemWS);
				});
				break;
			case 'https' : 
				const httpsRequest = https.get(url, (response : any) => {
					response.pipe(fileSystemWS);
				});
				break;
			case '' : 
				console.log("error : protocol inconnu");
				throw new Error("protocol inconnu! Merci de vérifier l'url");
				// remove file
				break;
		}
};

export default getAndWriteFile;