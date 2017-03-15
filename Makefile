
node_modules:
	npm install

zip: node_modules
	zip -r stackpath-purge.zip index.js node_modules


.PHONY: zip node_modules
