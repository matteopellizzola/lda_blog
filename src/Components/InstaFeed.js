import { useState } from "react";

function InstaFeed (props) {
    const url = "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=" + props.token;

    const [data, setData] = useState({});

    var fetchData = function fetchData () {
      try {
        //setIsLoading(true);
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (result) {
          setData(result.data);
          console.log('JavaScript version is here https://codecanyon.net/item/instaget-javascript-library-for-instagram/26300578');
        })["catch"](function (error) {
            return null; //setIsError(true);
        });
        //setIsLoading(false);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    };

    fetchData();

    console.log(data);

    return <>
        {/* {data.map((post) => <div>{post.id}</div>)} */}
    </>;
}

//export default InstaFeed;