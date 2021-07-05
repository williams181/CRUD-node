// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link href=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css rel=stylesheet integrity=sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js integrity=sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0 crossorigin=anonymous></script><title>Cadastro</title></head><body><div class=container><div class=\"d-flex flex-row-reverse\"><div class=p-1><h1> Cadastro <small class=text-muted> | Atualização dos dados do aluno</small></h1></div></div><div class=form-group><form action=/alunos method=post><div class=form-group><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "></div><div class=form-group><input type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    "><br></div><div class=form-group><input type=email name=email placeholder=email" +
    marko_attr("value", data.email) +
    "><br></div><div class=form-group><select name=curso value><option value" +
    marko_attr("salected", data.curso == "") +
    " disabled></option><option value=ads" +
    marko_attr("salected", data.curso == "ads") +
    ">Tecnólogo em ADS</option><option value=ipi" +
    marko_attr("salected", data.curso == "ipi") +
    ">Tec. em Informatica para internt</option><option value=qualidade" +
    marko_attr("salected", data.curso == "qualidade") +
    ">Tec. em gestão de qualidade</option></select></div> <br> <button class=\"btn btn-danger\" type=reset>Cancelar</button><button class=\"btn btn-success\" type=submit>Slavar</button></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
