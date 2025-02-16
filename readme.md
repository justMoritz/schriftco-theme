

# Building 

npx wp-scripts start
npx wp-scripts build


# Deploying

rsync -a -v --exclude='.git/' --exclude='node_modules/' -r . moritz@31.220.53.195:deployments/schriftnew/wp-content/themes/neue-schrift-co