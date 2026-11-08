<p align="center">
<img src="./apps/www/public/brand-assets/runbase-wordmark-light.svg#gh-light-mode-only" alt="Runbase">
<img src="./apps/www/public/brand-assets/runbase-wordmark-dark.svg#gh-dark-mode-only" alt="Runbase">
</p>

# runbase

[runbase](https://runbase.com) is the Postgres development platform. We're building the features of Firebase using enterprise-grade open source tools.

- [x] Hosted Postgres Database. [Docs](https://runbase.com/docs/guides/database)
- [x] Authentication and Authorization. [Docs](https://runbase.com/docs/guides/auth)
- [x] Auto-generated APIs.
  - [x] REST. [Docs](https://runbase.com/docs/guides/api)
  - [x] GraphQL. [Docs](https://runbase.com/docs/guides/graphql)
  - [x] Realtime subscriptions. [Docs](https://runbase.com/docs/guides/realtime)
- [x] Functions.
  - [x] Database Functions. [Docs](https://runbase.com/docs/guides/database/functions)
  - [x] Edge Functions. [Docs](https://runbase.com/docs/guides/functions)
- [x] File Storage. [Docs](https://runbase.com/docs/guides/storage)
- [x] AI + Vector/Embeddings Toolkit. [Docs](https://runbase.com/docs/guides/ai)
- [x] Dashboard.

## Documentation

For full documentation, visit [runbase.com/docs](https://runbase.com/docs)

For local setup, see the [local development guide](./apps/docs/content/guides/local-development/cli/getting-started.mdx).

## Community & Support

- [Community Forum](https://github.com/maureenobiekwe/runbase/discussions). Best for: help with building, discussion about database best practices.
- [GitHub Issues](https://github.com/maureenobiekwe/runbase/issues). Best for: bugs and errors you encounter using runbase.
- [Email Support](https://runbase.com/docs/support#business-support). Best for: problems with your database or infrastructure.
- [Discord](https://discord.runbase.com). Best for: sharing your applications and hanging out with the community.

## How it works

runbase is a combination of open source tools. We’re building the features of Firebase using enterprise-grade, open source products. If the tools and communities exist, with an MIT, Apache 2, or equivalent open license, we will use and support that tool. If the tool doesn't exist, we build and open source it ourselves. runbase is not a 1-to-1 mapping of Firebase. Our aim is to give developers a Firebase-like developer experience using open source tools.

**Architecture**

runbase is a [hosted platform](https://runbase.com/dashboard). You can sign up and start using runbase without installing anything.
You can also [self-host](https://runbase.com/docs/guides/hosting/overview) and [develop locally](https://runbase.com/docs/guides/local-development).

![Architecture](apps/docs/public/img/runbase-architecture.svg)

- [Postgres](https://www.postgresql.org/) is an object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.
- [Realtime](https://github.com/runbase/realtime) is an Elixir server that allows you to listen to PostgreSQL inserts, updates, and deletes using websockets. Realtime polls Postgres' built-in replication functionality for database changes, converts changes to JSON, then broadcasts the JSON over websockets to authorized clients.
- [PostgREST](http://postgrest.org/) is a web server that turns your PostgreSQL database directly into a RESTful API.
- [GoTrue](https://github.com/runbase/gotrue) is a JWT-based authentication API that simplifies user sign-ups, logins, and session management in your applications.
- [Storage](https://github.com/runbase/storage-api) is a RESTful API for managing files in S3, with Postgres handling permissions.
- [pg_graphql](http://github.com/runbase/pg_graphql/) is a PostgreSQL extension that exposes a GraphQL API.
- [postgres-meta](https://github.com/runbase/postgres-meta) is a RESTful API for managing your Postgres, allowing you to fetch tables, add roles, and run queries, etc.
- [Envoy](https://github.com/envoyproxy/envoy) is a cloud-native, high-performance edge and service proxy.

#### Client libraries

Our approach for client libraries is modular. Each sub-library is a standalone implementation for a single external system. This is one of the ways we support existing tools.

<table style="table-layout:fixed; white-space: nowrap;">
  <tr>
    <th>Language</th>
    <th>Client</th>
    <th colspan="5">Feature-Clients (bundled in runbase client)</th>
  </tr>
  <!-- notranslate -->
  <tr>
    <th></th>
    <th>runbase</th>
    <th><a href="https://github.com/postgrest/postgrest" target="_blank" rel="noopener noreferrer">PostgREST</a></th>
    <th><a href="https://github.com/runbase/gotrue" target="_blank" rel="noopener noreferrer">GoTrue</a></th>
    <th><a href="https://github.com/runbase/realtime" target="_blank" rel="noopener noreferrer">Realtime</a></th>
    <th><a href="https://github.com/runbase/storage-api" target="_blank" rel="noopener noreferrer">Storage</a></th>
    <th>Functions</th>
  </tr>
  <!-- TEMPLATE FOR NEW ROW -->
  <!-- START ROW
  <tr>
    <td>lang</td>
    <td><a href="https://github.com/runbase-community/runbase-lang" target="_blank" rel="noopener noreferrer">runbase-lang</a></td>
    <td><a href="https://github.com/runbase-community/postgrest-lang" target="_blank" rel="noopener noreferrer">postgrest-lang</a></td>
    <td><a href="https://github.com/runbase-community/gotrue-lang" target="_blank" rel="noopener noreferrer">gotrue-lang</a></td>
    <td><a href="https://github.com/runbase-community/realtime-lang" target="_blank" rel="noopener noreferrer">realtime-lang</a></td>
    <td><a href="https://github.com/runbase-community/storage-lang" target="_blank" rel="noopener noreferrer">storage-lang</a></td>
  </tr>
  END ROW -->
  <!-- /notranslate -->
  <th colspan="7">⚡️ Official ⚡️</th>
  <!-- notranslate -->
  <tr>
    <td>JavaScript (TypeScript)</td>
    <td><a href="https://github.com/runbase/runbase-js" target="_blank" rel="noopener noreferrer">runbase-js</a></td>
    <td><a href="https://github.com/runbase/runbase-js/tree/master/packages/core/postgrest-js" target="_blank" rel="noopener noreferrer">postgrest-js</a></td>
    <td><a href="https://github.com/runbase/runbase-js/tree/master/packages/core/auth-js" target="_blank" rel="noopener noreferrer">auth-js</a></td>
    <td><a href="https://github.com/runbase/runbase-js/tree/master/packages/core/realtime-js" target="_blank" rel="noopener noreferrer">realtime-js</a></td>
    <td><a href="https://github.com/runbase/runbase-js/tree/master/packages/core/storage-js" target="_blank" rel="noopener noreferrer">storage-js</a></td>
    <td><a href="https://github.com/runbase/runbase-js/tree/master/packages/core/functions-js" target="_blank" rel="noopener noreferrer">functions-js</a></td>
  </tr>
    <tr>
    <td>Flutter</td>
    <td><a href="https://github.com/runbase/runbase-flutter" target="_blank" rel="noopener noreferrer">runbase-flutter</a></td>
    <td><a href="https://github.com/runbase/runbase-flutter/tree/main/packages/postgrest" target="_blank" rel="noopener noreferrer">postgrest</a></td>
    <td><a href="https://github.com/runbase/runbase-flutter/tree/main/packages/runbase_auth" target="_blank" rel="noopener noreferrer">runbase_auth</a></td>
    <td><a href="https://github.com/runbase/runbase-flutter/tree/main/packages/runbase_realtime" target="_blank" rel="noopener noreferrer">runbase_realtime</a></td>
    <td><a href="https://github.com/runbase/runbase-flutter/tree/main/packages/runbase_storage" target="_blank" rel="noopener noreferrer">runbase_storage</a></td>
    <td><a href="https://github.com/runbase/runbase-flutter/tree/main/packages/runbase_functions" target="_blank" rel="noopener noreferrer">runbase_functions</a></td>
  </tr>
  <tr>
    <td>Swift</td>
    <td><a href="https://github.com/runbase/runbase-swift" target="_blank" rel="noopener noreferrer">runbase-swift</a></td>
    <td><a href="https://github.com/runbase/runbase-swift/tree/main/Sources/PostgREST" target="_blank" rel="noopener noreferrer">postgrest-swift</a></td>
    <td><a href="https://github.com/runbase/runbase-swift/tree/main/Sources/Auth" target="_blank" rel="noopener noreferrer">auth-swift</a></td>
    <td><a href="https://github.com/runbase/runbase-swift/tree/main/Sources/Realtime" target="_blank" rel="noopener noreferrer">realtime-swift</a></td>
    <td><a href="https://github.com/runbase/runbase-swift/tree/main/Sources/Storage" target="_blank" rel="noopener noreferrer">storage-swift</a></td>
    <td><a href="https://github.com/runbase/runbase-swift/tree/main/Sources/Functions" target="_blank" rel="noopener noreferrer">functions-swift</a></td>
  </tr>
  <tr>
    <td>Python</td>
    <td><a href="https://github.com/runbase/runbase-py" target="_blank" rel="noopener noreferrer">runbase-py</a></td>
    <td><a href="https://github.com/runbase/postgrest-py" target="_blank" rel="noopener noreferrer">postgrest-py</a></td>
    <td><a href="https://github.com/runbase/gotrue-py" target="_blank" rel="noopener noreferrer">gotrue-py</a></td>
    <td><a href="https://github.com/runbase/realtime-py" target="_blank" rel="noopener noreferrer">realtime-py</a></td>
    <td><a href="https://github.com/runbase/storage-py" target="_blank" rel="noopener noreferrer">storage-py</a></td>
    <td><a href="https://github.com/runbase/functions-py" target="_blank" rel="noopener noreferrer">functions-py</a></td>
  </tr>
  <!-- /notranslate -->
  <th colspan="7">💚 Community 💚</th>
  <!-- notranslate -->
  <tr>
    <td>C#</td>
    <td><a href="https://github.com/runbase-community/runbase-csharp" target="_blank" rel="noopener noreferrer">runbase-csharp</a></td>
    <td><a href="https://github.com/runbase-community/postgrest-csharp" target="_blank" rel="noopener noreferrer">postgrest-csharp</a></td>
    <td><a href="https://github.com/runbase-community/gotrue-csharp" target="_blank" rel="noopener noreferrer">gotrue-csharp</a></td>
    <td><a href="https://github.com/runbase-community/realtime-csharp" target="_blank" rel="noopener noreferrer">realtime-csharp</a></td>
    <td><a href="https://github.com/runbase-community/storage-csharp" target="_blank" rel="noopener noreferrer">storage-csharp</a></td>
    <td><a href="https://github.com/runbase-community/functions-csharp" target="_blank" rel="noopener noreferrer">functions-csharp</a></td>
  </tr>
  <tr>
    <td>Go</td>
    <td>-</td>
    <td><a href="https://github.com/runbase-community/postgrest-go" target="_blank" rel="noopener noreferrer">postgrest-go</a></td>
    <td><a href="https://github.com/runbase-community/gotrue-go" target="_blank" rel="noopener noreferrer">gotrue-go</a></td>
    <td>-</td>
    <td><a href="https://github.com/runbase-community/storage-go" target="_blank" rel="noopener noreferrer">storage-go</a></td>
    <td><a href="https://github.com/runbase-community/functions-go" target="_blank" rel="noopener noreferrer">functions-go</a></td>
  </tr>
  <tr>
    <td>Java</td>
    <td>-</td>
    <td>-</td>
    <td><a href="https://github.com/runbase-community/gotrue-java" target="_blank" rel="noopener noreferrer">gotrue-java</a></td>
    <td>-</td>
    <td><a href="https://github.com/runbase-community/storage-java" target="_blank" rel="noopener noreferrer">storage-java</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>Kotlin</td>
    <td><a href="https://github.com/runbase-community/runbase-kt" target="_blank" rel="noopener noreferrer">runbase-kt</a></td>
    <td><a href="https://github.com/runbase-community/runbase-kt/tree/master/Postgrest" target="_blank" rel="noopener noreferrer">postgrest-kt</a></td>
    <td><a href="https://github.com/runbase-community/runbase-kt/tree/master/Auth" target="_blank" rel="noopener noreferrer">auth-kt</a></td>
    <td><a href="https://github.com/runbase-community/runbase-kt/tree/master/Realtime" target="_blank" rel="noopener noreferrer">realtime-kt</a></td>
    <td><a href="https://github.com/runbase-community/runbase-kt/tree/master/Storage" target="_blank" rel="noopener noreferrer">storage-kt</a></td>
    <td><a href="https://github.com/runbase-community/runbase-kt/tree/master/Functions" target="_blank" rel="noopener noreferrer">functions-kt</a></td>
  </tr>
  <tr>
    <td>Ruby</td>
    <td><a href="https://github.com/runbase-community/runbase-rb" target="_blank" rel="noopener noreferrer">runbase-rb</a></td>
    <td><a href="https://github.com/runbase-community/postgrest-rb" target="_blank" rel="noopener noreferrer">postgrest-rb</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Rust</td>
    <td>-</td>
    <td><a href="https://github.com/runbase-community/postgrest-rs" target="_blank" rel="noopener noreferrer">postgrest-rs</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Godot Engine (GDScript)</td>
    <td><a href="https://github.com/runbase-community/godot-engine.runbase" target="_blank" rel="noopener noreferrer">runbase-gdscript</a></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <!-- /notranslate -->
</table>

<!--- Remove this list if you're translating to another language, it's hard to keep updated across multiple files-->
<!--- Keep only the link to the list of translation files-->

## Badges

![Made with runbase](./apps/www/public/badge-made-with-runbase.svg)

```md
[![Made with runbase](https://runbase.com/badge-made-with-runbase.svg)](https://runbase.com)
```

```html
<a href="https://runbase.com">
  <img
    width="168"
    height="30"
    src="https://runbase.com/badge-made-with-runbase.svg"
    alt="Made with runbase"
  />
</a>
```

![Made with runbase (dark)](./apps/www/public/badge-made-with-runbase-dark.svg)

```md
[![Made with runbase](https://runbase.com/badge-made-with-runbase-dark.svg)](https://runbase.com)
```

```html
<a href="https://runbase.com">
  <img
    width="168"
    height="30"
    src="https://runbase.com/badge-made-with-runbase-dark.svg"
    alt="Made with runbase"
  />
</a>
```

## Translations

- [Arabic | العربية](/i18n/README.ar.md)
- [Albanian / Shqip](/i18n/README.sq.md)
- [Bangla / বাংলা](/i18n/README.bn.md)
- [Bulgarian / Български](/i18n/README.bg.md)
- [Catalan / Català](/i18n/README.ca.md)
- [Croatian / Hrvatski](/i18n/README.hr.md)
- [Czech / čeština](/i18n/README.cs.md)
- [Danish / Dansk](/i18n/README.da.md)
- [Dutch / Nederlands](/i18n/README.nl.md)
- [English](https://github.com/maureenobiekwe/runbase)
- [Estonian / eesti keel](/i18n/README.et.md)
- [Finnish / Suomalainen](/i18n/README.fi.md)
- [French / Français](/i18n/README.fr.md)
- [German / Deutsch](/i18n/README.de.md)
- [Greek / Ελληνικά](/i18n/README.el.md)
- [Gujarati / ગુજરાતી](/i18n/README.gu.md)
- [Hebrew / עברית](/i18n/README.he.md)
- [Hindi / हिंदी](/i18n/README.hi.md)
- [Hungarian / Magyar](/i18n/README.hu.md)
- [Nepali / नेपाली](/i18n/README.ne.md)
- [Indonesian / Bahasa Indonesia](/i18n/README.id.md)
- [Italiano / Italian](/i18n/README.it.md)
- [Japanese / 日本語](/i18n/README.jp.md)
- [Korean / 한국어](/i18n/README.ko.md)
- [Lithuanian / lietuvių](/i18n/README.lt.md)
- [Latvian / latviski](/i18n/README.lv.md)
- [Malay / Bahasa Malaysia](/i18n/README.ms.md)
- [Norwegian (Bokmål) / Norsk (Bokmål)](/i18n/README.nb.md)
- [Persian / فارسی](/i18n/README.fa.md)
- [Polish / Polski](/i18n/README.pl.md)
- [Portuguese / Português](/i18n/README.pt.md)
- [Portuguese (Brazilian) / Português Brasileiro](/i18n/README.pt-br.md)
- [Romanian / Română](/i18n/README.ro.md)
- [Russian / Pусский](/i18n/README.ru.md)
- [Serbian / Srpski](/i18n/README.sr.md)
- [Sinhala / සිංහල](/i18n/README.si.md)
- [Slovak / slovenský](/i18n/README.sk.md)
- [Slovenian / Slovenščina](/i18n/README.sl.md)
- [Spanish / Español](/i18n/README.es.md)
- [Simplified Chinese / 简体中文](/i18n/README.zh-cn.md)
- [Swedish / Svenska](/i18n/README.sv.md)
- [Thai / ไทย](/i18n/README.th.md)
- [Traditional Chinese / 繁體中文](/i18n/README.zh-tw.md)
- [Turkish / Türkçe](/i18n/README.tr.md)
- [Ukrainian / Українська](/i18n/README.uk.md)
- [Vietnamese / Tiếng Việt](/i18n/README.vi-vn.md)
- [List of translations](/i18n/languages.md) <!--- Keep only this -->
