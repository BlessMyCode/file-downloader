import getArgs from './lib/getArgs';
import formatOutput from './lib/formatOutput';
import fs from 'fs';
import getAndWriteFile from './lib/getAndWriteFile';
import Params from './interface/Params';


try {
	const {output_filename, output_folder, url} : Params = getArgs();
	const output = formatOutput(output_folder, output_filename, url);
	const fileSystem : fs.WriteStream = fs.createWriteStream(output);

	getAndWriteFile(fileSystem, url);
} catch (e){
	console.log(e);
}