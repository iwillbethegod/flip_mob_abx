import {logData} from '../../utils/Applog';
import {BASE_URL} from '../../utils/constant';

//API to checl user login
export const checkLoginApi = async (username, password) => {
  try {
    const response = await fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    });
    let data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get monthly trends report data
export const monthlyTrendApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/dashboard/getMonthlyTrends', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: 'ALL',
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get next schedule data
export const nextScheduleApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/dashboard/getNextSchedule', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: 'ALL',
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get premium amount data
export const premiumAmountApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/dashboard/getPremiumAmount', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: 'ALL',
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get reports data
export const reportsApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/dashboard/getNumberOfReports', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: 'ALL',
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to send file for processing
export const sendFileApi = async (token, username, sharedFile) => {
  try {
    const formData = new FormData();
    formData.append('userName', username);
    formData.append('file', {
      uri: sharedFile.contentUri,
      type: sharedFile.mimeType,
      name: sharedFile.fileName,
    });

    const response = await fetch(BASE_URL + '/sendFileToFlip', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to logout user
export const logoutApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/logout', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get all vendor list
export const getVendorApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/vendor/getVendorDetails', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get all mapping list
export const getMappingListApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/definitions/getPartnerInfo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        department_id: -1,
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get list of processing files
export const getFileEventListApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/getMonitorEvents', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        department_id: -1,
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get schedule list
export const getscheduleListApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/getSchedules', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        department_id: -1,
      }),
    });
    const data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to get user details
export const getUserDetailApi = async token => {
  try {
    const response = await fetch(BASE_URL + '/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

export const changePasswordApi = async (
  token,
  currentPassword,
  newPassword,
  confirmNewPassword,
) => {
  try {
    const response = await fetch(BASE_URL + '/user/changePassword', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        old_password: currentPassword,
        new_password: newPassword,
        confirm_new_password: confirmNewPassword,
      }),
    });
    let data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};

//API call to send the messsage
export const sendMessageApi = async text => {
//  const formData = new FormData();
//  formData.append('query', text);

  try {
    const response = await fetch(
      'https://ai-workbench.flipnow.cloud/claims/abx/getResponse',
      {
        method: 'POST',
        body: JSON.stringify({query : text}),
        headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
        },
      },
    );
    logData(response);
    let data = await response.json();
    logData(data);
    return {data, error: null};
  } catch (error) {
    console.error(error);
    return {data: null, error};
  }
};
