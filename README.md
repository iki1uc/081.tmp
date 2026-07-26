# 81.tmp · iki1uc · Daten-Pool

## Zweck
81.tmp ist der zentrale Daten-Pool des iki1uc-Systems.  
Er verbindet alle Orte über **NC.link** und liefert Daten an:

- TMP (Kern)
- HDF (Resolver)
- SLIDE (Grafik)
- VECTOR (Moleküle)
- ALL (Hyperraum)
- SEND (Pipeline)
- MOVE (Routing)
- ANKER (Bindung)
- KI (Operatoren)
- UNI (Sprache)
- WELT (Portal)

## Datenquellen
Nur drei Quellen dürfen 81.tmp füttern:

1. **TMP.respo** – Achsen, Sequenzen, 6D-Kern  
2. **HDF/** – room-Dateien, Moleküle, Speicherblöcke  
3. **VECTOR/** – Zeichen-Moleküle

## Struktur
- 81.room  
- 9.room  
- COMMANDS.room  
- one.room  
- Molekül-Ordner (i/o/d/l/r/u/x/y)  
- Speicherblöcke (128/256/512/768)  
- tmp.hdf.resolver.js  

## NC.link
Alle Orte werden über NC.link adressiert:

NC.link("ORT")
NC.link("HOME")
NC.link("USER")
NC.link("WELT")
NC.link("UNI")
NC.link("KI")
NC.link("SLIDE")
NC.link("TMP")
NC.link("HDF")
NC.link("ROM")

## Nutzung
81.tmp wird von allen Modulen gelesen, aber nur von TMP + HDF + VECTOR geschrieben.

MP → 81.tmp
HDF → 81.tmp
VECTOR → 81.tmp
SLIDE ← 81.tmp
KI ← 81.tmp
UNI ← 81.tmp
WELT ← 81.tmp

## Status
Bereit für Integration.

Guided Link: NC_HUB_All

