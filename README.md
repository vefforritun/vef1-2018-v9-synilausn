# Verkefni 9

Útfæra skal leit og birtingu á lénum gegnum `apis.is`. `http://apis.is/isnic?domain=hi.is` leitar t.d. að upplýsingum um `hi.is` og skilar til baka hlut, t.d.:

```javascript
{
  "results": [
    {
    "domain": "hi.is",
    "registrantname": "Háskóli Íslands",
    "address": "Sæmundargötu 2",
    "city": "Reykjavík",
    "postalCode": "101",
    "country": "IS",
    "phone": "",
    "email": "hostmaster@hi.is",
    "registered": "11. December 1986",
    "expires": "11. December 2018",
    "lastChange": "29. November 2017"
    }
  ]
}
```

Gefinn er HTML og CSS grunnur með útliti sem ekki ætti að þurfa að breyta.

Leit skal:

* Aðeins leyfa að leita ef gildi í `<input>` er ekki tómistrengur, annars skal birta skilaboðin `Lén verður að vera strengur`
* Birta skilaboðin `Leita að léni...` ásamt mynd `loading.gif` meðan leitað er, sjá `.loading` class

Villumeðhöndlun:

* Ef villa kemur upp hjá `apis.is` eða við tengingu skal birta `Villa við að sækja gögn`
* Ef ekkert lén finnst skal birta `Lén er ekki skráð`

Birta skal fyrir öll lén sem finnast:

* Lén (`domain`)
* Skráð (`registered`)
* Seinast breytt (`lastChange`)
* Rennur út (`expires`)

Ef gögn eru skilgreind skal einnig birta:

* Skráningaraðili (`registrantname`)
* Netfang (`email`)
* Heimilisfang (`address`)
* Land (`country`)

Dagsetningar skal birta sem [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) dagsetningar (`YYYY-MM-DD`).

Útfæra skal JavaScript virkni innan þess módúl sem gefinn er.

`browser-sync` er uppsett í verkefninu:

```bash
npm install
npm run dev
```

Sjá dæmi í `demo.mp4`.

## eslint

Setja þarf upp `eslint` með airbnb style guide. `eslint` ætti að keyra þegar `npm test` er keyrt og linta allar javascript skrár.

Leyfilegt er að slökkva á villum tengum `for of` ítrunum með `/* eslint-disable-line */`, einnig er í lagi að nota það eða leyfa almennt `console.error`. Ekki ætti að nota það fyrir annað, heldur laga villu sem koma upp.

## Mat

* 20% – Snyrtilegt JavaScript með `eslint` uppsett og án villna
* 30% – Leit eftir lénum
* 30% – Niðurstöður birtar
* 20% – Villumeðhöndlun

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 5. nóvember 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags þriðjudaginn 13. nóvember 2018.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `mimiqkz`, `gorri4`, `hinriksnaer`, `gunkol`, `freyrdanielsson`, `osk`

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
