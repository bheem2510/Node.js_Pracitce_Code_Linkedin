import { Router } from "express";
import { save } from "./lib.js";
import skiTerms from "../data/skiTerms.json" assert { type: "json" };
import bodyParser from "body-parser";
const router = new Router();

router.get("/", (req, res) => {
  res.json(skiTerms);
});

router.post("/", bodyParser.json(), (req, res) => {
  skiTerms.push(req.body);
  save(skiTerms);
  res.json({
    status: "success",
    term: req.body
  });
});

router.delete("/:term", (req, res) => {
  skiTerms.filter(({ term }) => term !== req.params.term);
  save(skiTerms);
  res.json({
    status: "success",
    removed: req.params.term,
    newLength: skiTerms.length
  });
});

export default router;
