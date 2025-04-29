# 🚚 Delivery Service - ESGEATS

Microservice de gestion des livraisons pour l'application **ESGEATS**.  
Développé en **Node.js**, **Express**, et **MySQL**.

---

## 🛠️ Fonctionnalités

- Créer une livraison
- Voir les livraisons d'un livreur
- Mettre à jour le statut d'une livraison
- Clôturer toutes les livraisons d'un livreur
- Supprimer une livraison

---

## 📚 API Endpoints

| Méthode | Route | Description |
| :------ | :---- | :----------- |
| `POST` | `/delivery` | Créer une nouvelle livraison |
| `GET` | `/delivery/:userId` | Voir toutes les livraisons d'un livreur |
| `PUT` | `/delivery/:id/status` | Mettre à jour le statut d'une livraison |
| `POST` | `/delivery/close/:id` | Clôturer toutes les livraisons d'un livreur |
| `DELETE` | `/delivery/:id` | Supprimer une livraison |

---

## ⚙️ Installation

```bash
git clone https://github.com/ton-username/delivery-service.git
cd delivery-service
npm install
```

---

## 🔐 Configuration

Créer un fichier .env à la racine du projet

```dotenv
DB_HOST=localhost
DB_USER=root
DB_PWD="tonMotDePasse#avec#"
DB_DATABASE=esgeats
PORT=3000
```

---

## 🚀 Lancer en local

```bash
npm run dev
```

Le service sera disponible sur [http://localhost:3000](http://localhost:3000)

---

## 🧪 Tests

Installer les dépendances de test :
```bash
npm install --save-dev jest supertest
```

Lancer les tests :
```bash
npm test
```
Les tests utilisent des mocks (jest.mock()) pour simuler la base de données sans affecter l'environnement réel.

---

## ☁️ Déploiement sur Vercel

Un fichier vercel.json est prêt pour le déploiement.
Variables d'environnement à configurer sur Vercel :
- DB_HOST
- DB_USER
- DB_PWD
- DB_DATABASE

---

### 📄 Licence
Ce projet est sous licence MIT.

---