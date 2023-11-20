'use client'

import { useContext } from 'react'
import { pageContext } from './layout'
import Introduction from '@/components/guide/introduction/Introduction'
import Comeco from '@/components/guide/comeco/Comeco'
import Cultura from '@/components/guide/cultura/Cultura'
import Frutas from '@/components/guide/frutas/Frutas'
import Vegetables from '@/components/guide/vegetais/Vegetais'
import Horta from '@/components/guide/horta/Horta'
import ModaSustentavel from '@/components/guide/moda/ModaSustentavel'
import CasaSustentavel from '@/components/guide/casa/CasaSustentavel'
import BelezaConsciente from '@/components/guide/beleza/BelezaConsciente'
import ViagemSustentavel from '@/components/guide/viagem/ViagemSustentavel'
import EducacaoAmbiental from '@/components/guide/educacao/EducacaoAmbiental'
import ComunidadeCultiva from '@/components/guide/comunidade/ComunidadeCultiva'
import About from '@/components/guide/about/About'

export default function Guide() {
  const page = useContext(pageContext)

  if (page === 'introducao') {
    return <Introduction />
  }

  if (page === 'comeco') {
    return <Comeco />
  }

  if (page === 'cultura') {
    return <Cultura />
  }

  if (page === 'frutas') {
    return <Frutas />
  }

  if (page === 'vegetais') {
    return <Vegetables />
  }

  if (page === 'horta') {
    return <Horta />
  }

  if (page === 'moda') {
    return <ModaSustentavel />
  }

  if (page === 'casa') {
    return <CasaSustentavel />
  }

  if (page === 'beleza') {
    return <BelezaConsciente />
  }

  if (page === 'viagem') {
    return <ViagemSustentavel />
  }

  if (page === 'educacao') {
    return <EducacaoAmbiental />
  }

  if (page === 'comunidade') {
    return <ComunidadeCultiva />
  }

  if (page === 'sobre') {
    return <About />
  }

  return <Introduction />
}
