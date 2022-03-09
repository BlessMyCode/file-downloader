import getArgs from './lib/getArgs';
import formatOutput from './lib/formatOutput';
import fs from 'fs';
import getAndWriteFile from './lib/getAndWriteFile';
import Params from './interface/Params';

try {
	const {output_filename, output_folder, url} : Params = getArgs();
	const output = formatOutput(output_folder, output_filename, url);
	if (!fs.existsSync(output_folder)) {
		try {
			fs.mkdirSync(output_folder);
		} catch (e){
			throw new Error("echec lors de la création du dossier, merci de vérifier que vous possedez les droits suffisant!");
		}
	}
	const fileSystem : fs.WriteStream = fs.createWriteStream(output);

	getAndWriteFile(fileSystem, url);
} catch (e){
	console.log(e);
}