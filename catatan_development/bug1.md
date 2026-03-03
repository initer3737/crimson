### bug muncul di dinval1 dan 2 
---
[ ] browser tidak menerima karakter yang ada didalam class yang tidak diescape aturan resminya ! " # $ % & ' ( ) \* + , . / : ; < = > ? @ \[ \ ] ^ \` { | } ~& \*\
( )\
. :\
\# %\
/ ,\
\+ = ! ? @ $\
^ | ~ \[ ] { }
### solusinya di escape
```javascript
        const regex=/([\*\&\(\)])/g
        const replace_val=class_name?.replace(regex,"\\$1")

```

```html
    <h4 class="bg-*var(--jelly-name)*">kiro kiro kiro kyuuun Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus a dolore!</h4>

```

