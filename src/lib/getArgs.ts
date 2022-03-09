import Params from '../interface/Params';
import minimist from "minimist";
import EParams from "../Enum/EParams";

const getArgs : () => Params = () => {
	const params : Params = minimist<Params>(process.argv.slice(1));
	const url : string | undefined = params[EParams.url];
	const outputFileName : string | undefined = params[EParams.file];
	const outputFolder : string | undefined = params[EParams.folder];

	if( !outputFolder || !outputFileName || !url )
		throw new Error("Parametre manquat! veuillez fournir tous les parametres ! --output_filename, --url, --output_folder");

	return params;
};

export default getArgs;