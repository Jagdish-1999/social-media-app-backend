<style>
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.route-container {
      font-family: "Courier New","Open Sans";
      font-weight: 500;
      background-color: #2367af08;
      padding: 16px;
      border-radius: 4px;
      margin-bottom: 16px;

      & summary:first-child {
            list-style: none;
      }

      & h1 {
            font-size: 20px;
            padding: 16px;
            cursor: pointer;
      }

      & div.single-route {
            padding-left: 5%;

            & details:nth-of-type(even) {
                  border-left: 1px solid #00ff0050;
            }

            & details:nth-of-type(odd) {
                  border-left: 1px solid #0abefe50;
            }
      }

}

.route {
      font-family: "Nunito";
      border-radius: 4px;
      margin-bottom: 16px;
      padding: 4px 12px;

      &[open] {

            & summary {
                  border-bottom: 1px solid #0ff00f;
            }
      }


      & summary {
            list-style: none;
            cursor: pointer;
      }

      summary::-webkit-details-marker {
            /* Hides marker on Safari */
            display: none;
      }


      & .method-highlight {
            font-weight: 800;
            padding: 8px 16px;
            border-radius: 4px;
      }
      & .post-method {
            background-color:#ffff0020;
            color: #ffff00;
      }
      & .put-method {
            background-color:#00ffff20;
            color: #00ffff;

      }
      & .delete-method {
            background-color:#ff000020;
            color: #ee5050;

      }
      & .get-method {
            background-color:#00ff0020;
            color: #00ff00;
      }


      & h3 {
            padding-left: 8px;
            display: inline-block;

            & span.text {
                  font-family: "Courier New","Nunito";
                  font-weight: 100;
                  color: #00aaaa;
            }

            & sup {
                  font-family: "Courier New", "Open Sans";
                  opacity: 0.2;
                  font-size: 10px;
            }
      }

      & h2 {
            background-color: #5978f010;
            padding:16px;
            font-size: 14px;

            & sup.form-data {
                  color: #d050ea;
                  font-size: 12px;
            }
            & sup.raw-data {
                  color: #e7f079;
                  font-size: 12px;
            }
      }


      & .success-response {
            font-family: "Nunito";
            background-color: #00ff0020;
            padding: 8px 16px;
            font-size: 16px;
            color: #00ff00;
      }
      & .failure-response {
            font-family: "Nunito";
            background-color: #f0000f20;
            padding: 8px 16px;
            font-size: 16px;
            color: #ff3900;
      }
}

.app-heading {
      font-family: "Courier New", "Nunito";
      padding:16px;
      background-color:#af903210;
      border-radius:4px;
      font-size:18px;
      margin-bottom:8px;
}

</style>
<center class="app-heading"> Social Media App </center>

<!--? 1. All User Routes -->
<details class="route-container">
      <summary>
            <h1> 🚀 1. Users (<code><i>Feature</i></code>)</h1>
      </summary>

<div class="single-route">
<!--? 1. Signup -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/users/signup</code>
                        <span class="text"> Signup </span>
                        <sup>1</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"name": "Jane Doe",
	"email": "jane.doe@gmail.com",
	"password": "1234",
	"gender": "male"
}
```

<h2 > Response ↴ </h2>

<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 201,
	"message": "User registered successfully.",
	"data": {
		"_id": "67ae189fb2ed518b69f40bb4",
		"name": "jane doe",
		"email": "jane.doe@gmail.com",
		"avatar": "",
		"gender": "MALE",
		"sessions": [],
		"createdAt": "2025-02-13T16:06:55.111Z",
		"updatedAt": "2025-02-13T16:06:55.111Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 2. Signin -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/users/signin</code>
                        <span class="text"> Signin </span>
                        <sup>2</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"email": "john.doe@gmail.com",
	"password": "1234"
}
```

<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User logged in successfully.",
	"data": {
		"_id": "67ae189fb2ed518b69f40bb4",
		"name": "jane doe",
		"email": "jane.doe@gmail.com",
		"avatar": "",
		"gender": "MALE",
		"sessions": [
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
                  .eyJfaWQiOiI2N2FlMTg5ZmIyZWQ1MThiNjlmNDBiYjQiLCJlbWFpbCI6ImphbmUuZG9lQGdtYWlsLmNvbSIsImlhdCI6MTczOTQ2NjM5NiwiZXhwIjoxNzM5NTUyNzk2fQ
                  .E8Y44mu3GtIjocX61zgwA_qCwoBZE6L5nyup9oJ-m9M"
		],
		"createdAt": "2025-02-13T16:06:55.111Z",
		"updatedAt": "2025-02-13T17:06:36.231Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 3. Logout User -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/users/logout</code>
                        <span class="text"> Logout </span>
                        <sup>3</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User logged out successfully."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 4. Logout from all devices -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/users/logout-add-devices</code>
                        <span class="text"> Logout From All Devices </span>
                        <sup>4</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User logged out from all devices successfully."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 5. Get user detail -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/users/get-details</code>
                        <span class="text"> Get Logged In User's detail </span>
                        <sup>5</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User fetched successfully.",
	"data": {
		"_id": "67ae189fb2ed518b69f40bb4",
		"name": "jane doe",
		"email": "jane.doe@gmail.com",
		"gender": "MALE",
		"avatar": "",
		"createdAt": "2025-02-13T16:06:55.111Z",
		"updatedAt": "2025-02-13T17:06:36.231Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 6. Get all users detail -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/users/get-all-details</code>
                        <span class="text"> Get All Users Detail </span>
                        <sup>6</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User's list fetched successfully.",
	"data": [
		{
			"_id": "67ae189fb2ed518b69f40bb4",
			"name": "jane doe",
			"email": "jane.doe@gmail.com",
			"gender": "MALE",
			"avatar": "",
			"createdAt": "2025-02-13T16:06:55.111Z",
			"updatedAt": "2025-02-13T17:06:36.231Z"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 7. Update user detail like (name, gender & avatar) -->
<details class="route">
      <summary>
            <span class="method-highlight put-method">PUT</span>
            <h3>
                  <span>
                        <code>/api/users/update-details</code>
                        <span class="text"> Update </span>
                        <sup>7</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="form-data">form-data</sup> ↴</h2>

```json
avatar: "Screenshot 2025-01-21 at 6.09.22 PM.png"
```

<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User updated successfully.",
	"data": {
		"_id": "67ae189fb2ed518b69f40bb4",
		"name": "jane doe",
		"email": "jane.doe@gmail.com",
		"gender": "MALE",
		"avatar": "/public/images/avatar/avatar-1739466953910-418294063.png",
		"updatedAt": "2025-02-13T17:15:53.917Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 8. Delete user -->
<details class="route">
      <summary>
            <span class="method-highlight delete-method">DELETE</span>
            <h3>
                  <span>
                        <code>/api/users/:userId</code>
                        <span class="text"> Delete </span>
                        <sup>8</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User deleted successfully",
	"data": {
		"_id": "67ae2c0503577161edc3f8ac",
		"name": "jane doe",
		"email": "jane.doe@gmail.com",
		"password": "$2b$12$6XPaNvIF2OKSdtRnByumiuwQFpuH53ta01zkYfPM/j30VkNsONeCa",
		"gender": "MALE",
		"avatar": "",
		"sessions": [
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
                  .eyJfaWQiOiI2N2FlMmMwNTAzNTc3MTYxZWRjM2Y4YWMiLCJlbWFpbCI6ImphbmUuZG9lQGdtYWlsLmNvbSIsImlhdCI6MTczOTQ2Nzc4NCwiZXhwIjoxNzM5NTU0MTg0fQ
                  .Vsl0RprooFF-zvGpeaWC40F9qwxDX1h50cBVe9iiSG4"
		],
		"createdAt": "2025-02-13T17:29:41.922Z",
		"updatedAt": "2025-02-13T17:29:44.676Z",
		"__v": 1
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

</div>
</details>

<!--? 2. All Post Routes  -->
<details class="route-container">
      <summary>
            <h1> 🚀 2. Posts (<code><i>Feature</i></code>)</h1>
      </summary>

<!--? 1. Create Post -->
<div class="single-route">
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/posts</code>
                        <span class="text"> Create </span>
                        <sup>1</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
caption: "Testing post creation."
imageUrl: "Screenshot 2025-01-21 at 6.09.22 PM.png"
```

<h2 > Response ↴ </h2>

<div class="success-response"> ✅ SUCCESS </div>

```json
{
	"statusCode": 201,
	"message": "Post created successfully.",
	"data": {
		"_id": "67af59be9db13d8cd355c671",
		"userId": "67ae2cc503577161edc3f8b4",
		"caption": "Testing post creation.",
		"imageUrl": "/public/images/posts/imageUrl-1739545022055-958673815.png",
		"createdAt": "2025-02-14T14:57:02.070Z",
		"updatedAt": "2025-02-14T14:57:02.070Z"
	}
}
```

<div class="failure-response"> ❌ FAILURE </div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 2. Update Post -->
<details class="route">
      <summary>
            <span class="method-highlight put-method">PUT</span>
            <h3>
                  <span>
                        <code>/api/posts/:postId</code>
                        <span class="text"> Update </span>
                        <sup>2</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="form-data">form-data</sup> ↴</h2>

```json
caption: "This is updated post."
imageUrl: "Screenshot 2025-01-21 at 6.09.22 PM.png"
```

<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Post updated successfully!",
	"data": {
		"_id": "67af59be9db13d8cd355c671",
		"userId": "67ae2cc503577161edc3f8b4",
		"caption": "This is updated post.",
		"imageUrl": "/public/images/posts/imageUrl-1739545022055-958673815.png",
		"createdAt": "2025-02-14T14:57:02.070Z",
		"updatedAt": "2025-02-14T14:57:02.070Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 3. Delete Post -->
<details class="route">
      <summary>
            <span class="method-highlight delete-method">DELETE</span>
            <h3>
                  <span>
                        <code>/api/posts/:postId</code>
                        <span class="text"> Delete </span>
                        <sup>3</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Post deleted successfully."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 4. Get Post By Id -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/posts/:postId</code>
                        <span class="text"> Get Post By Post Id </span>
                        <sup>4</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Post fetched successfully!",
	"data": {
		"_id": "67af6003f42528947d6ae789",
		"userId": "67ae2cc503577161edc3f8b4",
		"caption": "Testing post creation.",
		"imageUrl": "/public/images/posts/imageUrl-1739546627087-179340380.png",
		"createdAt": "2025-02-14T15:23:47.094Z",
		"updatedAt": "2025-02-14T15:23:47.094Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 5. Get Specific User's Post -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/posts/user/:userId</code>
                        <span class="text"> Get Specific User's Post </span>
                        <sup>5</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "User's post fetched successfully.",
	"data": [
		{
			"_id": "67af6003f42528947d6ae789",
			"caption": "Testing post creation.",
			"imageUrl": "/public/images/posts/imageUrl-1739546627087-179340380.png",
			"createdAt": "2025-02-14T15:23:47.094Z",
			"updatedAt": "2025-02-14T15:23:47.094Z"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 6. Get All Posts -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/users/all</code>
                        <span class="text"> Get All Post </span>
                        <sup>6</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Post list fetched successfully.",
	"data": [
		{
			"_id": "67af6003f42528947d6ae789",
			"userId": "67ae2cc503577161edc3f8b4",
			"caption": "Testing post creation.",
			"imageUrl": "/public/images/posts/imageUrl-1739546627087-179340380.png",
			"createdAt": "2025-02-14T15:23:47.094Z",
			"updatedAt": "2025-02-14T15:23:47.094Z"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>
</div>
</details>

<!--? 3. All Comment Routes  -->
<details class="route-container">
      <summary>
            <h1> 🚀 3. Comments (<code><i>Feature</i></code>)</h1>
      </summary>

<!--? 1. Add(Create) Comment To a Post -->
<div class="single-route">
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/comments/:postId</code>
                        <span class="text"> Create </span>
                        <sup>1</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"message": "This is one of the best post."
}
```

<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 201,
	"message": "User make a comment on the post.",
	"data": {
		"_id": "67af66ce5697269c0af5d58a",
		"userId": "67ae2cc503577161edc3f8b4",
		"postId": "67af6003f42528947d6ae789",
		"message": "This is one of the best post.",
		"createdAt": "2025-02-14T15:52:46.259Z",
		"updatedAt": "2025-02-14T15:52:46.259Z"
	}
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 2. Update Comment -->
<details class="route">
      <summary>
            <span class="method-highlight put-method">PUT</span>
            <h3>
                  <span>
                        <code>/api/comments/:commentId</code>
                        <span class="text"> Update </span>
                        <sup>2</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"message": "This is updated comment."
}
```

<h2 > Response ↴ </h2>

<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Comment updated successfully by comment owner."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 3. Delete Comment -->
<details class="route">
      <summary>
            <span class="method-highlight delete-method">DELETE</span>
            <h3>
                  <span>
                        <code>/api/comments/:commentId</code>
                        <span class="text"> Delete </span>
                        <sup>3</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Comment deleted successfully by comment owner."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 4. Get Specific Post's Comment -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/comments/:postId</code>
                        <span class="text"> Get Specific Post's Comment </span>
                        <sup>4</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Comment fetched successfully",
	"data": [
		{
			"_id": "67af69975697269c0af5d599",
			"userId": "67ae2cc503577161edc3f8b4",
			"postId": "67af6003f42528947d6ae789",
			"message": "This is a good post. by John Doe",
			"createdAt": "2025-02-14T16:04:39.853Z",
			"updatedAt": "2025-02-14T16:04:39.853Z"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>
</div>
</details>

<!--? 4. All Like Routes -->
<details class="route-container">
      <summary>
            <h1> 🚀 4. Likes (<code><i>Feature</i></code>)</h1>
      </summary>

<!--? 1. Toggle Like -->
<div class="single-route">
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/likes/toggle/:postId</code>
                        <span class="text"> Toggle Like </span>
                        <sup>1</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2 > Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 201,
	"message": "Post liked successfully.",
	"data": {
		"userId": "67ae2cc503577161edc3f8b4",
		"postId": "67af6003f42528947d6ae789",
		"_id": "67af6d34f30512a676555893"
	}
}
```

OR

```json
{
	"statusCode": 200,
	"message": "Like deleted successfully."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 2. Get Specific Post's Like -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/likes/:postId</code>
                        <span class="text"> Get Specific Post's Like </span>
                        <sup>2</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Post's Like fetched successfully",
	"data": [
		{
			"_id": "67af6ef3f77b6201da215398",
			"userId": {
				"_id": "67ae2cc503577161edc3f8b4",
				"name": "jane doe",
				"email": "jane.doe@gmail.com"
			},
			"postId": "67af6003f42528947d6ae789"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>
</div>
</details>

<!--? 5. All Friendship Routes   -->
<details class="route-container">
      <summary>
            <h1> 🚀 5. Friendship (<code><i>Feature</i></code>)</h1>
      </summary>

<!--? 1. Toggle Friendship -->
<div class="single-route">
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/friends/toggle-friendship/:friendUserId</code>
                        <span class="text"> Toggle Friendship </span>
                        <sup>1</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 201,
	"message": "Friend request send successfully.",
	"data": {
		"userId": "67ae2cc503577161edc3f8b4",
		"friendUserId": "67aecbf98fcd2620f778e582",
		"status": "PENDING",
		"createdAt": "2025-02-15T01:02:02.151Z",
		"updatedAt": "2025-02-15T01:02:02.151Z",
		"_id": "67afe78aae4e7a4308098c69"
	}
}
```

OR

```json
{
	"statusCode": 200,
	"message": "User removed from friend list successfully."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 2. Get Pending Friend Requests -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/friends/get-pending-requests/</code>
                        <span class="text"> Get Pending Requests </span>
                        <sup>2</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Pending friend requests fetched successfully.",
	"data": [
		{
			"_id": "67afe85f13daa962fde7c36f",
			"userId": "67ae2cc503577161edc3f8b4",
			"friendUserId": "67aecbf98fcd2620f778e582",
			"status": "PENDING"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 3. Accept or Reject Friend Requset -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/friends/response-to-request/</code>
                        <span class="text"> Accept or Reject Request </span>
                        <sup>3</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"status": "accepted"
}
```

OR

```json
{
	"status": "rejected"
}
```

<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "You Accept this friend request."
}
```

OR

```json
{
	"statusCode": 200,
	"message": "You Reject this friend request."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 4. Get Friend List -->
<details class="route">
      <summary>
            <span class="method-highlight get-method">GET</span>
            <h3>
                  <span>
                        <code>/api/friends/get-friends/</code>
                        <span class="text"> Get Friend List </span>
                        <sup>4</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Friend list fetched successfully!",
	"data": [
		{
			"_id": "67ae2cc503577161edc3f8b4",
			"name": "jane doe",
			"email": "jane.doe@gmail.com"
		}
	]
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>
</div>
</details>

<!--? 5. All OTP Routes   -->
<details class="route-container">
      <summary>
            <h1> 🚀 6. OTP (<code><i>Feature</i></code>)</h1>
      </summary>

<!--? 1. Toggle Friendship -->
<div class="single-route">
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/otp/send</code>
                        <span class="text"> Send OTP </span>
                        <sup>1</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"email": "jane.doe@gmail.com"
}
```

<h2> Response ↴ </h2>

<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 201,
	"message": "OTP send successfully, Please check your mail."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 2. Verify OTP -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/otp/verify</code>
                        <span class="text"> Verify OTP </span>
                        <sup>2</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"otp": 514492
}
```

<h2> Response ↴ </h2>

<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "OTP verification successful."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>

<!--? 3. Reset Password -->
<details class="route">
      <summary>
            <span class="method-highlight post-method">POST</span>
            <h3>
                  <span>
                        <code>/api/otp/reset-password</code>
                        <span class="text"> Reset Password </span>
                        <sup>3</sup>
                  </span>
            </h3>
      </summary>

<div class="single-route">
<h2> Request <sup class="raw-data">raw-data</sup> ↴</h2>

```json
{
	"newPassword": "abcd"
}
```

<h2> Response ↴ </h2>
<div class="success-response">✅ SUCCESS</div>

```json
{
	"statusCode": 200,
	"message": "Password Changed successfully."
}
```

<div class="failure-response">❌ FAILURE</div>

```json
{
	"statusCode": "<Status Code>",
	"message": "<Error Message>"
}
```

</div>
</details>
</div>
</details>
