echo "Patching Vite for \`.css?raw\` import bug"
sed -i -e 's/|postcss)(\$|\\\\?)/|postcss)(?=$|\\\\?)(?!\\\\?raw)/' node_modules/vite/dist/node/chunks/*.js
