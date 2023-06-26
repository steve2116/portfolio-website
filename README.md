# My Portfolio Website

## If you would like to fork this repo, please make sure to follow these steps:

1. Navigate to where you would like to clone this repository and run these commands

```
    git clone https://github.com/steve2116/portfolio-website.git

    cd portfolio-website

    npm install
```

2. Then to setup the repository for hosting

```
    npm run build
```

3. Now, using your netlify account you can host this website

```
    echo "/* / 200" > ./dist/_redirects

    netlify deploy
    dist
```

and if you want to make it public

```
    netlify deploy --prod
    dist
```

4. If you would like to host this website using another method, follow steps 1 and 2 and then follow the instruction of your chosen method
