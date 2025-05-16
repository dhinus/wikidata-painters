# Who painted this?

A small game that lets you guess who created a painting.

Play at https://whopaintedthis.toolforge.org/

The data comes from [Wikidata](https://www.wikidata.org/).

This project was created during the 2022
[Wikimania Hackathon](https://wikimania.wikimedia.org/wiki/Hackathon).

## Running it locally

```
npm install
npm run dev
```

## Deploying

This project is deployed on [Toolforge](https://wikitech.wikimedia.org/wiki/Portal:Toolforge).

If you are a member of the `whopaintedthis` project on Toolforge, you can
trigger a build with:

```
ssh login.toolforge.org
$ become whopaintedthis
$ toolforge build start -L https://github.com/dhinus/wikidata-painters
```

To start/stop/restart the webservice:

```
toolforge webservice buildservice start --mount=none
toolforge webservice buildservice stop
toolforge webservice buildservice restart
```

To see the logs:

```
toolforge webservice logs
```

See also:
* https://wikitech.wikimedia.org/wiki/Help:Toolforge/Building_container_images
* https://wikitech.wikimedia.org/wiki/Help:Toolforge/Building_container_images/My_first_static_tool_using_Node.js
