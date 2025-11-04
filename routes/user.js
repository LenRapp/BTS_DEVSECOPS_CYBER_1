const express = require('express');
const router = express.Router();
const _ = require('lodash');
const { safeSerialize } = require('../utils/serializer');

router.post('/render', (req, res) => {
  const userTemplate =  '<%= name %>'
  const compiled = _.template(userTemplate);
  const html = compiled({ name: req.body.name || 'alice' });
  res.send(html);
});

router.post('/serialize', (req, res) => {
  const payload = req.body;
  const s = safeSerialize(payload);
  res.send({ serialized: s });
});

module.exports = router;
