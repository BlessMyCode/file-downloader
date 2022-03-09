import Params from '../interface/Params';
import minimist from "minimist";

const getArgs : () => Params = () => {
	const params : Params = minimist<Params>(process.argv.slice(1)),
	url : string | undefined = params['url'],
	output_filename : string | undefined = params['output_filename'],
	output_folder : string | undefined = params['output_folder'];
	
	if( !output_folder || !output_filename || !url )
		throw new Error("Parametre manquat! veuillez fournir tous les parametres ! --output_filename, --url, --output_folder");
	
	return params;
};

export default getArgs;