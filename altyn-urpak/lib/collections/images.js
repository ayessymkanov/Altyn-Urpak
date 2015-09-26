//	/**********************************************************/
//	/ CollectionFS package configuration for Meteor FileSystem /
//	/**********************************************************/


// for some reason it doesn't work now
var changeDimensions = function (fileObj, readStream, writeStream) {
    try {
        gm(readStream, fileObj.name()).resize('300').stream().pipe(writeStream);
    } catch (error) {
        throw new Meteor.Error(error);
    }
};

Images = new FS.Collection("images", {
	stores: [
		new FS.Store.FileSystem("images"/*, {transformWrite: changeDimensions}*/),
	],
	filter: {
    	allow: {
      		contentTypes: ['image/*'] //allow only images in this FS.Collection
    	},
    	maxSize: 5 * 1024 * 1024,	// in bytes
  	}
});
