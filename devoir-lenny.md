| Vulnérabilité Référence (CVE/advisory) | Correctif appliqué (commande / version)              | Gravité (CVSS / label) | OWASP Top-10 (2021) |
|----------------------------------------|------------------------------------------------------|---------| ---------------- |
| lodash /  CVE-2021-23337               | `npm install lodash@^4.17.21 `                       | 🔴 HIGH | A06:2021 – Vulnerable and Outdated Components. |
| lodash /  CVE-2020-28500               | `npm install lodash@^4.17.21 `                       | 🟠 MEDIUM | A06:2021 – Vulnerable and Outdated Components. |
| node-forge / CVE-2022-24771            | ` npm install node-forge@^1.3.0 `                    | 🔴 HIGH |A06:2021 – Vulnerable and Outdated Components.  <br/>A02:2021 – Cryptographic Failures |
| node-forge / CVE-2022-24772            | ` npm install node-forge@^1.3.0 `                    | 🔴 HIGH |A06:2021 “Vulnerable and Outdated Components  <br/>A02:2021 – Cryptographic Failures |
| node-forge / CVE-2022-0122             | ` npm install node-forge@^1.0.0 `                    | 🟠 MEDIUM |A06:2021 “Vulnerable and Outdated Components  <br/>A02:2021 – Cryptographic Failures              |
| node-forge / CVE-2022-24773            | ` npm install node-forge@^1.3.0 `                    | 🟠 MEDIUM |A06:2021 “Vulnerable and Outdated Components  <br/>A02:2021 – Cryptographic Failures              |
| node-forge /  GHSA-5rrq-pxf6-6jx5      | ` npm install node-forge@^1.0.0 `                    | 🟢 LOW  |A06:2021 “Vulnerable and Outdated Components               |
| node-forge / GHSA-gf8q-jrpm-jvxq       | ` npm install node-forge@^1.0.0 `                    | 🟢 LOW  |A06:2021 “Vulnerable and Outdated Components               |
| serialize-javascript / CVE-2020-7660   | ` npm install serialize-javascript@^7.0.0 `          | 🔴 HIGH |A06:2021 “Vulnerable and Outdated Components               |
| node-forge / GHSA-gf8q-jrpm-jvxq       | ` npm install serialize-javascript@^2.1.1`           | 🟠 MEDIUM |A06:2021 “Vulnerable and Outdated Components               |
| .env                                   | ajout dans le .gitignore <br/>suppression sur github| 🔴 HIGH |A02:2021 Cryptographic Failures                |
| private-node.pem                       | ajout dans le .gitignore <br/>suppression sur github | 🔴 HIGH |A02:2021 “Cryptographic Failures”              |
| private-node.pem.pub                   | ajout dans le .gitignore <br/>suppression sur github | 🔴 HIGH |A02:2021 “Cryptographic Failures”               |
routes/user.js (ligne _.template(userTemplate)) | Remplacer le template dynamique (req.body.template) par un template fixe et "en dur" dans le code. | 🔴 HIGH | A03:2021 "Injection" (SSTI)|
| routes/user.js (ligne unsafeSerialize(payload)) | Remplacer unsafeSerialize par JSON.stringify ou valider le schéma de req.body pour rejeter les clés __proto__. | 🔴 HIGH | A08:2021 "Software and Data Integrity Failures" |
| utils/serializer.js (ligne serialize(obj, { unsafe: true })) | Remplacer l'option { unsafe: true } par { unsafe: false } (la valeur par défaut) pour s'assurer que la sortie est échappée et sécurisée contre le XSS. | 🔴 HIGH | A03:2021 "Injection" (Cross-Site Scripting) |



