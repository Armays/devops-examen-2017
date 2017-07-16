# TP de noSql en Licence Devops (Groupe 1)

Réalisation d'une application d'une bibliothèque de livres.
Utilisation de nodejs comme serveur web et mongodb comme base de données, avec express, aws.

Format de la base de données:
bibliotheque:
{
&nbsp;&nbsp;ISBN:0000000000001,
&nbsp;&nbsp;titre:"Le meilleur des mondes",
&nbsp;&nbsp;auteur:"Aldous Huxley",
&nbsp;&nbsp;date_achat:new Date('05/01/2017'),
&nbsp;&nbsp;etat:"neuf",
&nbsp;&nbsp;thematique:["science-fiction","futuriste","distopie"],
&nbsp;&nbsp;emprunt: {
&nbsp;&nbsp;&nbsp;&nbsp;date_emprunt: new Date(),
&nbsp;&nbsp;&nbsp;&nbsp;date_retour: null,
&nbsp;&nbsp;&nbsp;&nbsp;duree_emprunt: '15 jours'
},
&nbsp;&nbsp;emprunteur: {
&nbsp;&nbsp;&nbsp;&nbsp;nom:''lakestani',
&nbsp;&nbsp;&nbsp;&nbsp;prenom: 'diane',
&nbsp;&nbsp;&nbsp;&nbsp;telephone: '060606060606',
&nbsp;&nbsp;&nbsp;&nbsp;mail: 'diane.lakestani@mail.com'
}
}

J'ai choisi de faire mes requêtes par rapport à l'id et non à l'ISBN au cas où l'ISBN ait été rentré deux fois et ne soit pas unique.

Pour lancer l'application : pm2-docker app.js et aller dans localhost:8080

La base de données mongodb est en ligne sur AWS avec CloudFormation, j'ai utilisé le client Robo 3T pour la remplir dans un premier temps.
