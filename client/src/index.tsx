import {initSocket} from './initSocket';
import {initShare} from './initShare';
import './index.less';

const url = new URL(location.href)
const shareId = url.searchParams.get('shareId');
if (shareId) {
  initShare()
} else {
  initSocket()
}
