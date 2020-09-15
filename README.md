# TransportKit

## Supported Cities

* Munich
* Berlin
* London
* New York City
* Nuremberg
* Regensburg
* Salzburg

## Example Page

You can have a look at the styles here: [schaechinger.com/transportkit](https://www.schaechinger.com/transportkit).

## Build CSS

First clone the repository to your machine:

```sh
git clone https://github.com/schaechinger/transportkit.git
cd transportkit
```

The SASS are located in the `sass` folder, separated in transport types.

To build the project run:

```sh
npm i
npm run build
```

## Use CSS

The current versions in CSS format are located in the `styles` folder after the build. \
Each supported city has it's own file if you only want to use styles for one city.
If you cloned the repository and edited the SASS files make sure you build the project first.

### Examples

The format is as followed: `transportkit-{city} transportkit-{city}--{line}`\
To enable dark / contrast mode, add the following class: `transportkit-{city}--contrast`

* [Munich](#munich)
* [Berlin](#berlin)
* [London](#london)
* [New York City](#nyc)
* [Nuremberg](#nuremberg)
* [Regensburg](#regensburg)
* [Salzburg](#salzburg)

| Line | HTML Class | Preview |
| ---- | ---------- | ------- |
| <strong id="munich">Munich</strong> |
| U-Bahn |
| Generic U-Bahn | `transportkit-munich--u` | ![U](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u.png?v=1) |
| U1 | `transportkit-munich--u1` | ![U1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u1.png?v=1) |
| U2 | `transportkit-munich--u2` | ![U2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u2.png?v=1) |
| U3 | `transportkit-munich--u3` | ![U3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u3.png?v=1) |
| U4 | `transportkit-munich--u4` | ![U4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u4.png) |
| U5 | `transportkit-munich--u5` | ![U5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u5.png) |
| U6 | `transportkit-munich--u6` | ![U6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u6.png) |
| U7 | `transportkit-munich--u7` | ![U7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u7.png) |
| U8 | `transportkit-munich--u8` | ![U8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--u8.png) |
| S-Bahn |
| Generic S-Bahn | `transportkit-munich--s` | ![S](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s.png) |
| S1 | `transportkit-munich--s1` | ![S1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s1.png) |
| S2 | `transportkit-munich--s2` | ![S2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s2.png) |
| S3 | `transportkit-munich--s3` | ![S3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s3.png) |
| S4 | `transportkit-munich--s4` | ![S4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s4.png) |
| S6 | `transportkit-munich--s6` | ![S6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s6.png) |
| S7 | `transportkit-munich--s7` | ![S7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s7.png) |
| S8 | `transportkit-munich--s8` | ![S8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s8.png) |
| S20 | `transportkit-munich--s20` | ![S20](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--s20.png) |
| Bus |
| Generic city bus | `transportkit-munich--b`<br>`transportkit-munich--bus` | ![132](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--b.png) |
| Generic metro bus | `transportkit-munich--bm`<br>`transportkit-munich--busm`<br>`transportkit-munich--bus-metro` | ![53](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--bm.png) |
| Generic express bus | `transportkit-munich--bx`<br>`transportkit-munich--busx`<br>`transportkit-munich--bus-express` | ![X30](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--bx.png) |
| Generic night bus | `transportkit-munich--bn`<br>`transportkit-munich--busn` | ![N41](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--bn.png) |
| Generic weekend-only<br>night bus | `transportkit-munich--bnw`<br>`transportkit-munich--busnw`<br>`transportkit-munich--bus-night-weekend` | ![N80](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--bnw.png) |
| Tram |
| Generic tram | `transportkit-munich--t`<br>`transportkit-munich--tram` | ![17](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t.png) |
| Generic peak time tram | `transportkit-munich--tp`<br>`transportkit-munich--tram-peak` | ![22](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--tp.png) |
| Tram 12 | `transportkit-munich--t12` | ![12](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t12.png) |
| Tram 15 | `transportkit-munich--t15` | ![15](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t15.png) |
| Tram 16 | `transportkit-munich--t16` | ![16](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t16.png) |
| Tram 17<br>Tram N17 | `transportkit-munich--t17`<br>`transportkit-munich--tn17` | ![17](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t17.png) ![N17](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--tn17.png) |
| Tram 18 | `transportkit-munich--t18` | ![18](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t18.png) |
| Tram 19<br>Tram N19 | `transportkit-munich--t19`<br>`transportkit-munich--tn19` | ![19](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t19.png) ![N19](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--tn19.png) |
| Tram 20<br>Tram N20 | `transportkit-munich--t20`<br>`transportkit-munich--tn20` | ![20](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t20.png) ![N20](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--tn20.png) |
| Tram 21 | `transportkit-munich--t21` | ![21](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t21.png) |
| Tram 22 | `transportkit-munich--t22` | ![22](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t22.png) |
| Tram 23 | `transportkit-munich--t23` | ![23](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t23.png) |
| Tram 25 | `transportkit-munich--t25` | ![25](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t25.png) |
| Tram 27<br>Tram N27 | `transportkit-munich--t27`<br>`transportkit-munich--tn27` | ![27](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t27.png) ![N27](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--tn27.png) |
| Tram 28 | `transportkit-munich--t28` | ![28](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-munich--t28.png) |
| <strong id="berlin">Berlin</strong> |
| U-Bahn |
| Generic U-Bahn | `transportkit-berlin--u` | ![U](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u.png) |
| U1 | `transportkit-berlin--u1` | ![U1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u1.png) |
| U2 | `transportkit-berlin--u2` | ![U2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u2.png) |
| U3 | `transportkit-berlin--u3` | ![U3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u3.png) |
| U4 | `transportkit-berlin--u4` | ![U4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u4.png) |
| U5<br>U55 | `transportkit-berlin--u5`<br>`transportkit-berlin--u55` | ![U5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u5.png) ![U55](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u55.png) |
| U6 | `transportkit-berlin--u6` | ![U6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u6.png) |
| U7 | `transportkit-berlin--u7` | ![U7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u7.png) |
| U8 | `transportkit-berlin--u8` | ![U8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u8.png) |
| U9 | `transportkit-berlin--u9` | ![U9](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--u9.png) |
| S-Bahn |
| Generic S-Bahn | `transportkit-berlin--s` | ![S](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s.png) |
| S1 | `transportkit-berlin--s1` | ![S1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s1.png) |
| S2<br>S25<br>S26 | `transportkit-berlin--s2`<br>`transportkit-berlin--s25`<br>`transportkit-berlin--s26` | ![S2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s2.png) ![S25](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s25.png) ![S26](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s26.png) |
| S3 | `transportkit-berlin--s3` | ![S3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s3.png) |
| S41<br>S45 | `transportkit-berlin--s41`<br>`transportkit-berlin--s45` | ![S41](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s41.png) ![S45](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s45.png) |
| S42 | `transportkit-berlin--s42` | ![S42](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s42.png) |
| S46<br>S47 | `transportkit-berlin--s46`<br>`transportkit-berlin--s47` | ![S46](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s46.png) ![S47](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s47.png) |
| S5 | `transportkit-berlin--s5` | ![S5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s5.png) |
| S7<br>S75 | `transportkit-berlin--s7`<br>`transportkit-berlin--s75` | ![S7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s7.png) ![S75](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s75.png) |
| S8<br>S85 | `transportkit-berlin--s8`<br>`transportkit-berlin--s85` | ![S8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s8.png) ![S85](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s85.png) |
| S9 | `transportkit-berlin--s9` | ![S9](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-berlin--s9.png) |
| <strong id="london">London</strong> |
| Tube |
| Bakerloo | `transportkit-london--bakerloo` | ![Bakerloo](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--bakerloo.png) |
| Central | `transportkit-london--central` | ![Central](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--central.png) |
| Circle | `transportkit-london--circle` | ![Circle](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--circle.png) |
| District | `transportkit-london--district` | ![District](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--district.png) |
| Hammersmith & City | `transportkit-london--hammersmith` | ![Hammersmith & City](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--hammersmith.png) |
| Jubilee | `transportkit-london--jubilee` | ![Jubilee](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--jubilee.png) |
| Metropolitan | `transportkit-london--metropolitan` | ![Metropolitan](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--metropolitan.png) |
| Northern | `transportkit-london--northern` | ![Northern](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--northern.png) |
| Piccadilly | `transportkit-london--piccadilly` | ![Piccadilly](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--piccadilly.png) |
| Victoria | `transportkit-london--victoria` | ![Victoria](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--victoria.png) |
| Waterloo & City | `transportkit-london--waterloo` | ![Waterloo & City](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--waterloo.png) |
| Overgrounds |
| Overground | `transportkit-london--overground` | ![Overground](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--overground.png) |
| TfL Rail | `transportkit-london--tflrail` | ![TfL Rail](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--tflrail.png) |
| DLR | `transportkit-london--dlr` | ![DLR](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--dlr.png) |
| Tram | `transportkit-london--t`<br>`transportkit-london--tram` | ![Tram](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--tram.png) |
| Bus & River Bus |
| Generic bus | `transportkit-london--b`<br>`transportkit-london--bus` | ![14](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--b.png) |
| Woolrich Ferry | `transportkit-london--rbwoolwich` | ![Woolwich Ferry](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rbwoolwich.png) |
| RB1 | `transportkit-london--rb1` | ![RB1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rb1.png) |
| RB1X | `transportkit-london--rb1x` | ![RB1X](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rb1x.png) |
| RB2 | `transportkit-london--rb2` | ![RB2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rb2.png) |
| RB4 | `transportkit-london--rb4` | ![RB4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rb4.png) |
| RB5 | `transportkit-london--rb5` | ![RB5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rb5.png) |
| RB6 | `transportkit-london--rb6` | ![RB6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--rb6.png) |
| Air Line |
| Emirates Air Line | `transportkit-london--aemirates` | ![Emirates Air Line](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-london--aemirates.png) |
| <strong id="nyc">New York City</strong> |
| Subway |
| 1<br>2<br>3 | `transportkit-nyc--1`<br>`transportkit-nyc--2`<br>`transportkit-nyc--3` | ![1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--1.png) ![2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--2.png) ![3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--3.png) |
| 4<br>5<br>6<br>6d | `transportkit-nyc--4`<br>`transportkit-nyc--5`<br>`transportkit-nyc--6`<br>`transportkit-nyc--6d` | ![4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--4.png) ![5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--5.png) ![6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--6.png) ![6d](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--6d.png) |
| 7<br>7d | `transportkit-nyc--7`<br>`transportkit-nyc-7d` | ![7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--7.png) ![7d](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--7d.png) |
| A<br>C<br>E | `transportkit-nyc--a`<br>`transportkit-nyc--c`<br>`transportkit-nyc--e` | ![A](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--a.png) ![C](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--c.png) ![E](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--e.png) |
| B<br>D<br>F<br>M | `transportkit-nyc--b`<br>`transportkit-nyc--d`<br>`transportkit-nyc--f`<br>`transportkit-nyc--m` | ![B](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--b.png) ![D](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--d.png) ![F](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--f.png) ![M](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--m.png) |
| G | `transportkit-nyc--g` | ![G](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--g.png) |
| J<br>Z | `transportkit-nyc--j`<br>`transportkit-nyc--z` | ![J](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--j.png) ![Z](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--z.png) |
| L | `transportkit-nyc--l` | ![L](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--l.png) |
| S | `transportkit-nyc--s` | ![S](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--s.png) |
| N<br>Q<br>R<br>W | `transportkit-nyc--n`<br>`transportkit-nyc--q`<br>`transportkit-nyc--r`<br>`transportkit-nyc--w` | ![N](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--n.png) ![Q](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--q.png) ![R](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--r.png) ![W](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nyc--w.png) |
| <strong id="nuremberg">Nuremberg</strong> |
| U-Bahn |
| Generic U-Bahn | `transportkit-nuremberg--u` | ![U](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--u.png) |
| U1 | `transportkit-nuremberg--u1` | ![U1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--u1.png) |
| U2 | `transportkit-nuremberg--u2` | ![U2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--u2.png) |
| U3 | `transportkit-nuremberg--u3` | ![U3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--u3.png) |
| S-Bahn |
| Generic S-Bahn | `transportkit-nuremberg--s` | ![S](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--s.png) |
| S1 | `transportkit-nuremberg--s1` | ![S1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--s1.png) |
| S2 | `transportkit-nuremberg--s2` | ![S2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--s2.png) |
| S3 | `transportkit-nuremberg--s3` | ![S3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--s3.png) |
| S4 | `transportkit-nuremberg--s4` | ![S4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--s4.png) |
| Tram |
| Generic Tram<br>4 | `transportkit-nuremberg--t`<br>`transportkit-nuremberg--t4` | ![4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--t4.png) |
| 5 | `transportkit-nuremberg--t5` | ![5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--t5.png) |
| 6 | `transportkit-nuremberg--t6` | ![6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--t6.png) |
| 7 | `transportkit-nuremberg--t7` | ![7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--t7.png) |
| 8 | `transportkit-nuremberg--t8` | ![8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--t8.png) |
| R-Bahn |
| Generic R-Bahn<br>R 1 | `transportkit-nuremberg--r`<br>`transportkit-nuremberg--r1` | ![R 1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r1.png) |
| R 11 | `transportkit-nuremberg--r11` | ![R 11](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r11.png) |
| R 12 | `transportkit-nuremberg--r12` | ![R 12](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r12.png) |
| R 2 | `transportkit-nuremberg--r2` | ![R 2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r2.png) |
| R 21 | `transportkit-nuremberg--r21` | ![R 21](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r21.png) |
| R 3 | `transportkit-nuremberg--r3` | ![R 3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r3.png) |
| R 31 | `transportkit-nuremberg--r31` | ![R 31](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r31.png) |
| R 4 | `transportkit-nuremberg--r4` | ![R 4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r4.png) |
| R 5 | `transportkit-nuremberg--r5` | ![R 5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r5.png) |
| R 6 | `transportkit-nuremberg--r6` | ![R 6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r6.png) |
| R 7 | `transportkit-nuremberg--r7` | ![R 7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r7.png) |
| R 9 | `transportkit-nuremberg--r9` | ![R 9](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-nuremberg--r9.png) |
| <strong id="regensburg">Regensburg</strong> |
| Bus |
| Generic bus | `transportkit-regensburg--b`<br>`transportkit-regensburg--bus` | ![Generic](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b.png) |
| Generic suburb bus | `transportkit-regensburg--bsub`<br>`transportkit-regensburg--bus-suburb` | ![Suburb](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--bsub.png) |
| A | `transportkit-regensburg--ba` | ![A](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--ba.png) |
| X4 | `transportkit-regensburg--bx4` | ![X4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--bx4.png) |
| X9 | `transportkit-regensburg--bx9` | ![X9](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--bx9.png) |
| 1 | `transportkit-regensburg--b1` | ![1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b1.png) |
| 2 | `transportkit-regensburg--b2` | ![2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b2.png) |
| 3 | `transportkit-regensburg--b3` | ![3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b3.png) |
| 4<br>4A | `transportkit-regensburg--b4`<br>`transportkit-regensburg--b4a` | ![4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b4.png) ![4A](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b4a.png) |
| 5<br>5A | `transportkit-regensburg--b5`<br>`transportkit-regensburg--b5a` | ![5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b5.png) ![5A](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b5a.png) |
| 6 | `transportkit-regensburg--b6` | ![6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b6.png) |
| 7 | `transportkit-regensburg--b7` | ![7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b7.png) |
| 8<br>8A<br>8B | `transportkit-regensburg--b8`<br>`transportkit-regensburg--b8a`<br>`transportkit-regensburg--b8b` | ![8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b8.png) ![8A](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b8a.png) ![8B](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b8b.png) |
| 9 | `transportkit-regensburg--b9` | ![9](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b9.png) |
| 10 | `transportkit-regensburg--b10` | ![10](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b10.png) |
| 11<br>11A | `transportkit-regensburg--b11`<br>`transportkit-regensburg--b11a` | ![11](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b11.png) ![11A](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b11a.png) |
| 12 | `transportkit-regensburg--b12` | ![12](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b12.png) |
| 13 | `transportkit-regensburg--b13` | ![13](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b13.png) |
| 14 | `transportkit-regensburg--b14` | ![14](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b14.png) |
| 15 | `transportkit-regensburg--b15` | ![15](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b15.png) |
| 16 | `transportkit-regensburg--b16` | ![16](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b16.png) |
| 17 | `transportkit-regensburg--b17` | ![17](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b17.png) |
| 18 | `transportkit-regensburg--b18` | ![18](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b18.png) |
| 20 | `transportkit-regensburg--b20` | ![20](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b20.png) |
| 21 | `transportkit-regensburg--b21` | ![21](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b21.png) |
| 23 | `transportkit-regensburg--b23` | ![23](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b23.png) |
| 24 | `transportkit-regensburg--b24` | ![24](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b24.png) |
| 28 | `transportkit-regensburg--b28` | ![28](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b28.png) |
| 30<br>31 | `transportkit-regensburg--b30`<br>`transportkit-regensburg--b31` | ![30](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b30.png) ![31](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b31.png) |
| 32 | `transportkit-regensburg--b32` | ![32](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b32.png) |
| 33 | `transportkit-regensburg--b33` | ![33](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b33.png) |
| 34 | `transportkit-regensburg--b34` | ![34](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b34.png) |
| 41 | `transportkit-regensburg--b41` | ![41](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b41.png) |
| 77 | `transportkit-regensburg--b77` | ![77](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b77.png) |
| 78 | `transportkit-regensburg--b78` | ![78](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-regensburg--b78.png) |
| <strong id="salzburg">Salzburg</strong> |
| O-Bus |
| 1 | `transportkit-salzburg--o1` | ![1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o1.png) |
| 2 | `transportkit-salzburg--o2` | ![2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o2.png) |
| 3 | `transportkit-salzburg--o3` | ![3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o3.png) |
| 4 | `transportkit-salzburg--o4` | ![4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o4.png) |
| 5 | `transportkit-salzburg--o5` | ![5](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o5.png) |
| 6 | `transportkit-salzburg--o6` | ![6](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o6.png) |
| 7 | `transportkit-salzburg--o7` | ![7](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o7.png) |
| 8 | `transportkit-salzburg--o8` | ![8](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o8.png) |
| 9 | `transportkit-salzburg--o9` | ![9](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o9.png) |
| 10 | `transportkit-salzburg--o10` | ![10](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o10.png) |
| 12 | `transportkit-salzburg--o12` | ![12](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o12.png) |
| 14 | `transportkit-salzburg--o14` | ![14](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--o14.png) |
| S-Bahn |
| S1 | `transportkit-salzburg--s1` | ![S1](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--s1.png) |
| S2 | `transportkit-salzburg--s2` | ![S2](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--s2.png) |
| S3 | `transportkit-salzburg--s3` | ![S3](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--s3.png) |
| S4 | `transportkit-salzburg--s4` | ![S4](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--s4.png) |
| Bus |
| Generic bus | `transportkit-salzburg--b` | ![840](https://static.schaechinger.com/projects/transportkit/latest/examples/transportkit-salzburg--b.png) |

### Download CSS

However, if you want to use the CSS files right without compiling, you can refer to these links to get the styles for all cities or insert the lower case city name into the second link:

* [All cities](https://static.schaechinger.com/projects/transportkit/latest/transportkit.min.css)
* [Munich](https://static.schaechinger.com/projects/transportkit/latest/transportkit-munich.min.css)
* [Berlin](https://static.schaechinger.com/projects/transportkit/latest/transportkit-berlin.min.css)
* [London](https://static.schaechinger.com/projects/transportkit/latest/transportkit-london.min.css)
* [New York City](https://static.schaechinger.com/projects/transportkit/latest/transportkit-nyc.min.css)
* [Nuremberg](https://static.schaechinger.com/projects/transportkit/latest/transportkit-nuremberg.min.css)
* [Regensburg](https://static.schaechinger.com/projects/transportkit/latest/transportkit-regensburg.min.css)
* [Salzburg](https://static.schaechinger.com/projects/transportkit/latest/transportkit-salzburg.min.css)

## Licenses

Please note that some icons may have restrictions or require a license prior to use. \
Please read the guidelines of the companies before using them.

* [Berlin (BVG)](https://www.bvg.de/de/Service/Kundenservice/BVG-Icons)
* [London (TfL)](https://tfl.gov.uk/info-for/suppliers-and-contractors/product-licensing)
* [New York City (MTA)](http://web.mta.info/developers/license.html)
