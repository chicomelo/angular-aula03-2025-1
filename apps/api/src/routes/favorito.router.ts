import {
  Router,
  Request,
  Response,
  NextFunction
} from 'express'
import { getCollection } from '../util/get-collection'
import { IFavorito } from '@nx-monorepo/comum'

export const favoritoRouter = Router()

favoritoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {

  const favoritos: IFavorito[] = await getCollection<IFavorito>(
    req.app,
    'favoritos'
  ).find().toArray()
  res.json(favoritos)

})

favoritoRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {

  const _id: number = +req.params._id

  const favorito: (IFavorito | null) = await getCollection<IFavorito>(
    req.app,
    'favoritos'
  ).findOne({ _id: _id })
  res.json(favorito)

})

favoritoRouter.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {

  const _id: number = +req.params._id
  const body: IFavorito = req.body

  const results = await getCollection<IFavorito>(
    req.app,
    'favoritos'
  ).findOneAndReplace({ _id: _id }, body, { returnDocument: 'after' })

  if (results) {
    res.json(results)
  } else {
    res.status(500).json({ error: 'Erro ao atualizar favorito' })
  }

})
