#delijn
A command line tool for querying De Lijn

and

A module you can use in your own application(s) for querying De Lijn

## The Command Line Tool

###Installation
```javascript
npm install -g delijn
```

###Basic Usage


#### Getting Help
```bash
$ delijn
 Usage: delijn [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    stations [query]   search for stations
    departures [name]  search for departures

```

#### Finding a station
```bash
$ delijn stations mortsel
Deurne Mortselsesteenweg
Mortsel A. Stockmanslei
Mortsel Abelenstraat
Mortsel Boechoutselei
Mortsel Deurnestraat
Mortsel E. Thieffrylaan
Mortsel Floralaan
Mortsel Gemeenteplein
Mortsel Gevaert
Mortsel Grijpegemplein
Mortsel Haleblok
Mortsel Hof Savelkoul
Mortsel IJzerenweglei
Mortsel Kaphaan
Mortsel Kerkstraat
Mortsel Kuijpers
Mortsel Meidoorn
Mortsel Molenlei
Mortsel Neerhoevelaan
Mortsel Osylei
Mortsel Rubensstraat
Mortsel Sint-Amedeuskliniek
Mortsel Sint-Jozefkliniek
Mortsel Station
Mortsel Station Oude God
Mortsel T. Reynlaan
Mortsel Vredebaan
Mortsel Zaaldenrode
```

#### Finding the departures of a station
```bash
$ delijn departures "Mortsel Kuijpers"
22:35   (in 5 minutes)          Bus             91              Berchem Station - Mortsel - Waarloos
22:35   (in 5 minutes)          Tram            7               Sint-Pietersvliet - Mortsel
22:36   (in 6 minutes)          Tram            7               Sint-Pietersvliet - Mortsel
22:37   (in 7 minutes)          Tram            7               Mortsel - Sint-Pietersvliet
22:37   (in 7 minutes)          Bus             92              Kontich Station - Mortsel - Berchem Station
22:38   (in 8 minutes)          Bus             91              Berchem Station - Mortsel - Waarloos
22:40   (in 10 minutes)         Bus             92              Kontich Station - Mortsel - Berchem Station
22:44   (in 14 minutes)         Tram            15              Linkeroever - Boechout
22:47   (in 17 minutes)         Tram            15              Boechout - Linkeroever
22:49   (in 19 minutes)         Tram            15              Boechout - Linkeroever
22:55   (in 25 minutes)         Tram            7               Sint-Pietersvliet - Mortsel
22:56   (in 26 minutes)         Tram            7               Sint-Pietersvliet - Mortsel
22:57   (in 27 minutes)         Tram            7               Mortsel - Sint-Pietersvliet
```

-------

## License

(The MIT License)

Copyright (c) by Sebastian Van Sande <sebastian@vansande.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.