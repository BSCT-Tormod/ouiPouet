
create table user (
    idUser char(10),
    emailUser varchar(64),
    mdpUser varchar(256),
    adminUser number(1),
    nomUser varchar(64),
    prenomUser varchar(64),
    telUser char(10),
    idAdresse varchar(20),
    ADD CONSTRAINT pk_user PRIMARY KEY (idUser),
    ADD CONSTRAINT fk_user_adress FOREIGN KEY (idAdresse) REFERENCES adresse(idAdresse)
);

create table adresse(
    idAdresse varchar(20),
    surnomAdresse varchar(64),
    adresse varchar(128),
    complement varchar(64),
    ville varchar(45),
    codePostal char(8),
    idUser char(10),
    ADD CONSTRAINT pk_adress PRIMARY KEY (idAdresse),
    ADD CONSTRAINT fk_adress_adress FOREIGN KEY (idUser) REFERENCES user(idUser)
);

create table produit(
    idProduit  VARCHAR(20),
    nomProduit VARCHAR(64),
    descProduit VARCHAR(256),
    prixProduit DECIMAL(9,2),
    prixProduit DECIMAL(9,2),
    dateProduit DATE,
    stockProduit DECIMAL(9,2),
    reduction DECIMAL(9,2),
    imageProduit DECIMAL(9,2),
    idSousCat VARCHAR(20),
    ADD CONSTRAINT pk_produit PRIMARY KEY (idProduit),
    ADD CONSTRAINT fk_produit_sousCat FOREIGN KEY (idSousCat) REFERENCES sousCategorie(idSousCat)
);

create table categorie(
    idCat VARCHAR(20),
    nomCat VARCHAR(64),
    descCat VARCHAR(256),
    ADD CONSTRAINT pk_idCat PRIMARY KEY (idCat)
);

create table sousCategorie(
    idSousCat VARCHAR(20),
    nomSousCat VARCHAR(64),
    descSousCat VARCHAR(256),
    ADD CONSTRAINT pk_sousCat PRIMARY KEY (idSousCat)
);

create table panier(
    quantite DECIMAL(4)
    idProduit  VARCHAR(20),
    idUser char(10),
    ADD CONSTRAINT pk_panier PRIMARY KEY (idProduit, idUser),
    ADD CONSTRAINT fk_panier_idProduit FOREIGN KEY (idProduit) REFERENCES produit(idProduit),
    ADD CONSTRAINT fk_panier_idUser FOREIGN KEY (idUser) REFERENCES user(idUser)
);

create table commande (
idCommande VARCHAR(20),
troisFois DECIMAL(1),
tauxTVA DECIMAL(3),
montant DECIMAL(11,2),
idUser char(10),
idCB VARCHAR(20),
idAdresse varchar(20),
ADD CONSTRAINT pk_commande PRIMARY KEY (idCommande),
ADD CONSTRAINT fk_commande_idUser FOREIGN KEY (idUser) REFERENCES user(idUser),
ADD CONSTRAINT fk_commande_idCB FOREIGN KEY (idCB) REFERENCES carteBancaire(idCb),
ADD CONSTRAINT fk_commande_idAdress FOREIGN KEY (idAdresse) REFERENCES adresse(idAdresse),

);

create table carteBancaire (
    idCB VARCHAR(20),
    numeroCB CHAR(16),
    nomCB VARCHAR(64),
    dateCB DATE,
    cryptoCB VARCHAR(4)
);