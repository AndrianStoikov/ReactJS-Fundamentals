import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import AllBooks from './components/AllBooks'
import BookDetails from './components/BookDetails'
import BooksPage from './components/BooksPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/books/all' component={AllBooks} />
    <Route path='/books/all/:page' component={BooksPage} />
    <Route path='/books/:id' component={BookDetails} />
  </Switch>
)

export default Routes
