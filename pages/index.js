import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
      <Helmet
        title={config.siteTitle}
        meta={[
          {"name": "description", "content": "pyconar 2017 - Cordoba, Argentina - Baterias D, Ciudad Universitaria, UNC"},
          {"name": "keywords", "content": "conference, python, pycon, pyconar, pyar, UNC, Cordoba"},
        ]}
      />

      <div className="flex-row flex-fill">
        <div className="flex-col left">
            <div className="center"><img src="/logo.png" /></div>

        </div>
        <div className="flex-col right">
          <div className="inner-content">
            <div>
            <h1>17, 18 y 19 de Noviembre</h1>
            <h2>Ciudad Universitaria UNC, Cordoba, Argentina</h2>
            <ul>
              <li>IRC: irc.freenode.org <a href="irc://irc.freenode.org:6697/pyar">#pyar</a> (usuarios tutuca y gaucho)</li>
              <li>e-mail: <a href="mailto:pycon@pyar.org.ar">pycon@pyar.org.ar</a></li>
              <li>Twitter: <a href="http://twitter.com/@pyconar">@pyconar</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
