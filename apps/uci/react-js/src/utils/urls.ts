import moment from 'moment';
import { getBaseUrl } from './getBaseUrl';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getConvHistoryUrl = (user: any): string =>
	`${
		getBaseUrl('chatHistory')
	}/xmsg/conversation-history?provider=pwa&endDate=${moment()
		.add(7, 'days')
		.format('DD-MM-YYYY')}&startDate=19-03-2023&botId=${
		user?.id
	}&userId=${`nlpwa:${localStorage.getItem('mobile')}`}`;
	
export const getBotDetailsUrl = (): string =>
	`${getBaseUrl('botDetails')}/admin/bot/allContextual`;

// export const getBotDetailsUrl = (botId: string): string =>
// 	`${process.env.REACT_APP_UCI_BOT_BASE_URL}/admin/bot/${botId}`;