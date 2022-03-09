import minimist from "minimist";
import https from "https";
import fs from 'fs';

interface Params {
	url : string;
	output_filename : string;
	output_folder : string;
}

const params : Params = minimist<Params>(process.argv.slice(1)),
	url : string | undefined = params['url'],
	output_filename : string | undefined = params['output_filename'],
	output_folder : string | undefined = params['output_folder'];
console.log(params);

const fileSystem = fs.createWriteStream(output_folder + "/" + output_filename);

const httpRequest = https.get(url, (response : any) => {
	console.log('response');
	response.pipe(fileSystem);
});


	console.log('httpRequest');
	console.log(httpRequest);