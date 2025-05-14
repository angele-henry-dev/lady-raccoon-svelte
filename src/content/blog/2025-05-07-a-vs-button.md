---
title: "<a> ≠ <button>"
slug: "a-vs-button"
date: "2025-05-14"
description: "Un rappel essentiel pour améliorer l’accessibilité et l’UX de tes sites web : la différence entre les balises a et button"
tags: ["Accessibilité", "HTML", "Dev"]
published: true
---

**Un `<a>` n’est pas un `<button>`. Et inversement.**

On pourrait croire que c’est un détail, que tant que ça *marche*, tout va bien. Mais en réalité, le choix entre `<a>` et `<button>` est 
fondamental pour l’**accessibilité**, l’**UX**, et même le **référencement**.

---

## Un `<a>` = navigation

Tu veux envoyer l’utilisateur vers une autre page, un autre site, ou une ancre interne ?

Utilise un **lien** :

```html
<a href="/contact">Contactez-nous</a>
```

---

## Un `<button>` = action

Tu ouvres une modale&nbsp;? Tu déclenches un menu&nbsp;? Tu modifies un élément dans la page sans changer d’URL&nbsp;?

Utilise un **bouton** :

```html
<button @click="openModal = true">Ouvrir la modale</button>
```

---

## Pourquoi c’est important&nbsp;?

Parce que les **navigateurs**, le **clavier** et les **lecteurs d’écran** attendent un **comportement précis** en fonction des balises utilisées.

Utiliser la mauvaise balise, c’est :

- tromper les technologies d’assistance et donc l'humain derrière,
- gâcher l’expérience utilisateur (UX),
- rendre la navigation difficile, voire impossible, pour certaines personnes.

---

## Petit tip bonus

Tu peux parfaitement styliser un `<a>` pour qu’il **ressemble à un bouton**, ou un `<button>` pour qu’il **ressemble à un lien**.

Mais…

> **Ne triche pas avec les rôles HTML.**

- Ne mets pas `role="button"` sur un lien,
- ne mets pas `onclick` sur un lien sans `href`,
- ne force pas un `<button>` à agir comme un lien.

Bref, ne mélange pas tout&nbsp;! Chaque balise a un rôle sémantique important. Respecter ce rôle, c’est **garantir un web plus accessible**.

---

## En résumé

Tu veux : 
- naviguer vers une autre page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Utilise `<a>`,
- déclencher une action dans la page&nbsp;&nbsp;&nbsp;&nbsp;: Utilise `<button>`

**Respecter les balises HTML, c’est coder pour tout le monde.**
