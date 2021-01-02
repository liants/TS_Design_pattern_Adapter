//RANDRIAMISAINA Harimisa Lucas IGGLIA5 N°10
//ANDRIAMAHEFA Hajanary Christian IGGLIA5 N°11
//RAMANGASON Tsitohaina IGGLIA5 N°28
//ROVANIAINA Sarobidy Liantsoa IGGLIA5 N°31
/*
Prenons un cas concret. Nous sommes un grossiste et vendons des articles à de grandes enseignes de la grande distribution. 
Nous avons une application mise à disposition de ces clients pour acheter nos articles. 
Tous nos clients sont homogènes, car ils implémentent l’interface IUtilisateur. 
Cette application est également ouverte à nos salariés qui souhaitent se fournir directement chez nous, 
sans passer par la grande distribution.
Un jour, nous avons eu à faire évoluer une fonctionnalité de notre application : lister l’ensemble de nos clients, 
mais cette fois en indiquant pour les employés leur poste actuel.
Notre problème est le suivant : Nous avons une gestion identique des clients et des salariés et nous ne voulons 
pas refaire entièrement la gestion des utilisateurs et souhaitons que cette évolution ne perturbe pas le fonctionnement 
actuel de l’application.
Pour y répondre, nous faisons le choix d’utiliser le pattern “Adapter”, 
pour que l’appel de la méthode “AfficherUtilisateur” nous affiche le nom du client, 
et dans le cas d’un employé son nom suivi de son poste actuel.
Nous avons créé une application console pour illustrer ce cas. 
Elle crée une liste de clients et, pour chacun d’eux, appelle la méthode “AfficherUtilisateur”. 
S’il s’agit d’un client, on affiche son nom, s’il s’agit d’un employé, son nom suivi de son poste.
Voici le modèle de classes :Adapter
Nous voyons ici que nous avons mappé la classe Employe à l’aide de la classe EmployeAdapter, qui hérite de IUtilisateur.

Implementation
*/ 
interface IUtilisateur {
    AfficherUtilisateur();
}

class Client implements IUtilisateur{
    private _nom : string;

    constructor (nom : string){
        this._nom = nom ;
    }

    AfficherUtilisateur(){
        console.log("Nom du client:" ,this._nom);        
    }
}

class Employe {
    private _nom : string ;
    private _poste : string ;

    constructor(nom : string, poste : string){
        this._nom = nom ;
        this._poste = poste;
    }
    
    AfficherNom(){
        console.log("Nom de l'employe : ",this._nom);
    }

    AfficherPoste(){
        console.log("Poste actuel : ",this._poste);
    }
}


/*Design Pattern : Adapter*/
class EmployeAdapter implements IUtilisateur{
    private _employe : Employe ;

    constructor(employe : Employe){
        this._employe = employe;
    }

    AfficherUtilisateur(){
        this._employe.AfficherNom();
        this._employe.AfficherPoste();
    }
}

