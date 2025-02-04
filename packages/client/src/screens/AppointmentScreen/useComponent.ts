import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import {
  appointmentLoadingSelector,
  authMyAccountIdSelector,
  createAppointmentByIdSelector,
} from '../../selectors'
import {
  getAppointments,
  createAppointment,
  createDialog,
  sendSystemMessage,
} from '../../actionCreators'
import { createUseComponent, useActions } from '../../hooks'
import { ROOT_ROUTE } from '../../constants/routes'
import { createMapStateSelector } from '../../utils/selectors'
import useIsOffLine from '../../hooks/useIsOffLine'

const createSelector = (appointmentId?: QBAppointment['_id']) =>
  createMapStateSelector({
    loading: appointmentLoadingSelector,
    myAccountId: authMyAccountIdSelector,
    appointment: createAppointmentByIdSelector(appointmentId),
  })

export default createUseComponent(() => {
  const { appointmentId } = useParams<Dictionary<string>>()
  const actions = useActions({
    getAppointments,
    createAppointment,
    createDialog,
    sendSystemMessage,
  })
  const selector = createSelector(appointmentId)
  const store = useSelector(selector)
  const isOffline = useIsOffLine()
  const { appointment, myAccountId } = store
  const history = useHistory()
  const [chatOpen, setChatOpen] = useState<boolean>(false)

  useEffect(() => {
    if (
      appointment &&
      ((appointment.date_end && !appointment.conclusion) ||
        appointment.client_id !== myAccountId)
    ) {
      history.push(ROOT_ROUTE)
    }
  }, [appointment, myAccountId, appointmentId])

  useEffect(() => {
    if (!isOffline && appointmentId) {
      actions.getAppointments({
        _id: appointmentId,
      })
    }
  }, [isOffline, appointmentId])

  return {
    store,
    data: { appointmentId, chatOpen },
    handlers: { setChatOpen },
  }
})
