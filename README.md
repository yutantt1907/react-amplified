# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


 //常時用(ボタンの判別）
      ui_flg :"",
      //発呼："call_start",
      // "help",
      // 発呼対象者リスト表示"call_target"
      // 電話番号タブ登録ボタン："number_reg"
      // 電話削除"number_del"
      // 電話番号タブ更新ボタン:"number_reload"
      // スクリプトタブ登録ボタン:"script_reg"

call_area=HICITY&level=1&role=1&ui_flg=call_start
      //発呼用
      call_area : call_areas,
			role : call_roles,
      // 電話番号タブ登録ボタン：押下時処理
      number : telTab_number,
      turn : telTab_turn,
      name : telTab_name,
      town : telTab_town,
      lang_pt : telTab_lang_pt,
      script_ver: telTab_script_ver,
      contact : telTab_contact,
      sensor_id : telTab_sensor_id,
      helper_name : telTab_helper_name,
      helper_number : telTab_helper_number,
      // 電話番号タブ削除ボタン：押下時処理
      number : telTab_number_del,
      // スクリプトタブ登録ボタン
      version : scriptTab_version,
      text1 : scriptTab_text1,
      text2 : scriptTab_text2,
      text3 : scriptTab_text3,
      text4 : scriptTab_text4,
      text5 : scriptTab_text5,
      text6 : scriptTab_text6,
      text7 : scriptTab_text7,
      text8 : scriptTab_text8,
      sms_from : scriptTab_sms_from,
      sms_text : scriptTab_sms_text,
      // スクリプトタブ削除ボタンscript_del
      version : scriptTab_version_del,
      // スクリプトタブ更新ボタン"script_reload"
      // 避難登録／解除タブ：登録ボタンevac_reg
      number : evacRegTab_telNo,
      shelter : evacRegTab_shelter,
      // 避難登録／解除タブ：解除ボタン"evac_del"
      number : evacRegTab_telNo_del,
      // 結果タブ：最新情報取得ボタンresult_get
      // 避難所タブ登録ボタンshelter_reg
      shelter_number : shelterTab_shelter_number,
      shelter : shelterTab_shelter,
      town : shelterTab_town,
      max_capa : shelterTab_max_capa,
      gw_id : shelterTab_gw_id,
      // 避難所タブ削除ボタンshelter_del
      shelter : shelterTab_shlter_del,
      // 避難所タブ削除ダイアログのキャンセルボタン押下時処理shelter_reload

