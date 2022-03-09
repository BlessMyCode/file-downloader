const formatOutput = (folder : string, fileName : string, url : string) : string => {
	const regexpExtension = /\.\w+$/;
	const matchArrayOutput : string[] | null = fileName.match(regexpExtension);
	const outputExtension : string = matchArrayOutput ? matchArrayOutput[0] : "";
	const matchArrayURL : string[] | null = url.match(regexpExtension);
	const urlExtension : string = matchArrayURL ? matchArrayURL[0] : "";
	const folderLastChar : string = folder.slice(-1);

	if( outputExtension !== urlExtension && outputExtension ){
		console.log("error : file extension missmatch");
		throw new Error("error : extension de fichier incorrecte ou imcompatible entre l'entrée et la sortie");
	}
	const newOutputFileName : string = (outputExtension !== urlExtension && !outputExtension)
			? fileName+urlExtension
			: fileName;
	const newOutputDirectory : string = (folderLastChar === '/')
			? folder
			: folder + '/';
	const output : string = newOutputDirectory + newOutputFileName;

	return output;
};

export default formatOutput;