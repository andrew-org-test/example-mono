## Overview

A public API that sits infront of the Hertitage and Optimus platforms, allowing third parties to make API calls to Shieldpay while masking the platform and/or service handling the requets.

This service implements the pattern described bellow: https://aws.amazon.com/blogs/architecture/unlocking-data-from-existing-systems-with-serverless-api-facade/

Working with the API Facade requires at least some understanding of Public/Private Key encryption, Mutual TLS, and signing documents usings a Public/Private key. Here are some useful resources to familiarise yourself with these topics:

- https://www.youtube.com/watch?v=HHQ2QP_upGM&list=PLIFyRwBY_4bRA8g3gVainRSoNNDL5qqQN&index=13&ab_channel=PracticalNetworking
- https://www.youtube.com/watch?v=doN3lzzNEIM&list=PLIFyRwBY_4bRA8g3gVainRSoNNDL5qqQN&index=14&t=384s&ab_channel=PracticalNetworking
- https://www.youtube.com/watch?v=o_g-M7UBqI8&list=PLIFyRwBY_4bRA8g3gVainRSoNNDL5qqQN&index=15&ab_channel=PracticalNetworking
- https://www.youtube.com/watch?v=_zyKvPvh808&list=PLIFyRwBY_4bRA8g3gVainRSoNNDL5qqQN&index=16&ab_channel=PracticalNetworking
- https://www.youtube.com/watch?v=l_ZbduoVQqs&ab_channel=Venafi
- https://www.youtube.com/watch?v=8FB12c1lDyo&ab_channel=AmazonWebServices