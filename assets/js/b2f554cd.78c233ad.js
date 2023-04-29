"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"ansible-tutorial","metadata":{"permalink":"/blog/ansible-tutorial","editUrl":"https://github.com/pejmanS21/pejmans21.github.io/tree/main/blog/2023-04-29-ansible-tutorial/index.md","source":"@site/blog/2023-04-29-ansible-tutorial/index.md","title":"Ansible Tutorial","description":"If you\u2019re new to Ansible, it can feel overwhelming at first. Whether you\u2019re trying to automate your infrastructure, deploy applications, or manage configurations, Ansible has a lot to offer. But don\u2019t let that scare you away. With a little knowledge and practice, you too can become proficient in using Ansible.","date":"2023-04-29T00:00:00.000Z","formattedDate":"April 29, 2023","tags":[{"label":"DevOps","permalink":"/blog/tags/dev-ops"},{"label":"Ansible","permalink":"/blog/tags/ansible"},{"label":"MKDocs","permalink":"/blog/tags/mk-docs"}],"readingTime":2.78,"hasTruncateMarker":false,"authors":[{"name":"Pajman Samadi","title":"DevOps / MLOps Engineer @ AiMedic","url":"https://pejmans21.github.io","imageURL":"https://avatars.githubusercontent.com/u/73995528?s=96&v=4","key":"pejmans21"}],"frontMatter":{"slug":"ansible-tutorial","title":"Ansible Tutorial","authors":["pejmans21"],"tags":["DevOps","Ansible","MKDocs"]},"nextItem":{"title":"Meta iOS Course","permalink":"/blog/ios-course"}},"content":"If you\u2019re new to Ansible, it can feel overwhelming at first. Whether you\u2019re trying to automate your infrastructure, deploy applications, or manage configurations, Ansible has a lot to offer. But don\u2019t let that scare you away. With a little knowledge and practice, you too can become proficient in using Ansible.\\nTo help other beginners like myself, I\u2019ve put together a repository on Github detailing everything I\u2019ve learned about Ansible so far. In this blog post, I\u2019ll summarize some of the key concepts and tips I\u2019ve learned about this handy tool.\\n## Understanding Ansible\\nAt its core, Ansible is an open-source IT automation tool created by Red Hat. According to their website, Ansible \u201cprovides a simple, yet powerful, automation engine for tackling complex workflows and orchestrating seamless deployments.\u201d\\nThe key advantage of Ansible is that it allows for automation without the need for special coding skills. With its simple YAML syntax, you can automate everything from deployment to configuration management to continuous delivery.\\nOne important concept to understand when working with Ansible is that it uses a declarative approach to configuration management. This means that instead of specifying step-by-step instructions for tasks, you declare the state that you want your infrastructure to be in, and Ansible will take care of the details for you.\\nAnsible also uses a client-server architecture. The Ansible server (also known as the control machine) communicates with one or more Ansible clients (also known as managed nodes) to execute tasks. However, unlike other configuration management tools, Ansible does not require an agent to be installed on the client machines. Instead, it relies on SSH or WinRM protocols to establish a connection.\\nGetting Started with Ansible\\nTo get started using Ansible, you\u2019ll need to install it on your control machine. Ansible supports Linux, macOS, and Windows. Once you have Ansible installed, you can use it to execute tasks on one or more managed nodes.\\nA critical part of Ansible is understanding the inventory. The inventory is a file that specifies the managed nodes and groups of nodes that Ansible will target. The inventory can be a static file or generated dynamically from sources such as cloud providers, LDAP, or DNS.\\nOne of the great features of Ansible is that it offers a large collection of pre-written tasks and modules called \u201cAnsible Galaxy.\u201d These modules can be easily installed and used in your playbook. Additionally, Ansible provides a powerful templating system (Jinja2) that allows you to personalize your task execution.\\n\\n## Advanced Ansible Techniques\\nAs you become more familiar with Ansible, you can start to take advantage of its more advanced features. Some of the ways you can level up your Ansible skills include:\\n- Using Ansible vault for encrypting sensitive data\\n- Creating custom modules for specific tasks\\n- Creating roles to group your tasks into reusable units\\n- Utilizing Ansible playbooks for orchestration and customization\\n- Creating dynamic inventories using APIs or other sources\\n\\n## Conclusion\\nAnsible is a powerful automation tool that can help you streamline your infrastructure and configuration management. With its declarative syntax and client-server architecture, Ansible is easy to use and can scale to meet the demands of even the largest infrastructure. By reading through my Github repository and utilizing the tips and concepts outlined in this blog post, you\u2019ll be well on your way to mastering Ansible.\\n\\n[![ui](./ui.png)](https://pejmans21.github.io/ansible-tutorial/)"},{"id":"ios-course","metadata":{"permalink":"/blog/ios-course","editUrl":"https://github.com/pejmanS21/pejmans21.github.io/tree/main/blog/2023-02-04-meta-ios-course/index.md","source":"@site/blog/2023-02-04-meta-ios-course/index.md","title":"Meta iOS Course","description":"I recently worked with some wonderful tools, such as Obsidian and MKDocs, to generate and serve documentation. I use these tools to write notes and documents for my current course. You may wish to take a look at the links below if you wish to learn more about iOS.","date":"2023-02-04T00:00:00.000Z","formattedDate":"February 4, 2023","tags":[{"label":"iOS","permalink":"/blog/tags/i-os"},{"label":"Swift","permalink":"/blog/tags/swift"},{"label":"Coursera","permalink":"/blog/tags/coursera"},{"label":"Meta","permalink":"/blog/tags/meta"},{"label":"MKDocs","permalink":"/blog/tags/mk-docs"},{"label":"Obsidian","permalink":"/blog/tags/obsidian"}],"readingTime":0.25,"hasTruncateMarker":false,"authors":[{"name":"Pajman Samadi","title":"DevOps / MLOps Engineer @ AiMedic","url":"https://pejmans21.github.io","imageURL":"https://avatars.githubusercontent.com/u/73995528?s=96&v=4","key":"pejmans21"}],"frontMatter":{"slug":"ios-course","title":"Meta iOS Course","authors":["pejmans21"],"tags":["iOS","Swift","Coursera","Meta","MKDocs","Obsidian"]},"prevItem":{"title":"Ansible Tutorial","permalink":"/blog/ansible-tutorial"},"nextItem":{"title":"LS-Fastapi","permalink":"/blog/ls-fastapi"}},"content":"I recently worked with some wonderful tools, such as _Obsidian_ and _MKDocs_, to generate and serve documentation. I use these tools to write notes and documents for my current course. You may wish to take a look at the links below if you wish to learn more about **iOS**.\\n\\n[![ui](./ui.jpeg)](https://pejmans21.github.io/meta-ios-course/)"},{"id":"ls-fastapi","metadata":{"permalink":"/blog/ls-fastapi","editUrl":"https://github.com/pejmanS21/pejmans21.github.io/tree/main/blog/2022-11-22-LS-Fastapi/index.md","source":"@site/blog/2022-11-22-LS-Fastapi/index.md","title":"LS-Fastapi","description":"- An AI model for lung segmentation in CXR images, deploying with FastAPI.","date":"2022-11-22T00:00:00.000Z","formattedDate":"November 22, 2022","tags":[{"label":"Tensorflow","permalink":"/blog/tags/tensorflow"},{"label":"FastAPI","permalink":"/blog/tags/fast-api"},{"label":"DVC","permalink":"/blog/tags/dvc"},{"label":"Docker","permalink":"/blog/tags/docker"},{"label":"Kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":1.065,"hasTruncateMarker":false,"authors":[{"name":"Pajman Samadi","title":"DevOps / MLOps Engineer @ AiMedic","url":"https://pejmans21.github.io","imageURL":"https://avatars.githubusercontent.com/u/73995528?s=96&v=4","key":"pejmans21"}],"frontMatter":{"slug":"ls-fastapi","title":"LS-Fastapi","authors":["pejmans21"],"tags":["Tensorflow","FastAPI","DVC","Docker","Kubernetes"]},"prevItem":{"title":"Meta iOS Course","permalink":"/blog/ios-course"},"nextItem":{"title":"FaceRecognition_Django","permalink":"/blog/face-recognition"}},"content":":::info summary\\n\\n- An AI model for lung segmentation in CXR images, deploying with FastAPI.\\n- Use DVC for data version control, and dockerizing web-app.\\n- Deploy projects w/ K8s.\\n:::\\n\\nThis app uses `FastAPI` as backend. Check repository on [GitHub](https://github.com/pejmanS21/LS-Fastapi).\\n\\n## Usage for `app.py`\\n\\nFirst install required libraries by running:\\n\\n```bash\\npip install -r requirements.txt\\n```\\n\\nTo run the application run following command in `src` dir:\\n\\n```bash\\nuvicorn app:app --reload\\n```\\n\\nor\\n\\n```bash\\nchmod +x app.sh\\n./app.sh\\n```\\n\\n## Tutorial for `app.py`\\n\\n![app.gif](app.gif)\\n\\n## Tutorial\\n\\n### `main page`\\n\\n```\\nhttp://localhost:8000/\\n```\\n\\n![main.png](./main.png)\\n\\n### `fastapi documentation`\\n\\n```\\nhttp://localhost:8000/docs\\n```\\n\\n![docs.png](./docs.png)\\n\\n### `show results`\\n\\n```\\nhttp://localhost:8000/imshow\\n```\\n\\n![imshow.png](./imshow.png)\\n\\n---\\n\\n## DVC\\n\\n```bash\\npip install dvc dvc-gdrive\\n\\n# pull weights from Google Drive\\ndvc pull\\n```\\n\\nin [weights](./weights/) directory\\n\\n```\\nweights\\n\u251c\u2500\u2500 cxr_resunet.tflite\\n\u251c\u2500\u2500 cxr_resunet.tflite.dvc\\n\u251c\u2500\u2500 cxr_unet.tflite\\n\u2514\u2500\u2500 cxr_unet.tflite.dvc\\n```\\n\\n---\\n\\n## Docker\\n\\n```bash\\n# Build image\\ndocker build -t IMAGE_NAME:TAG_NAME .\\ndocker run -p 8000:8000 -d IMAGE_NAME:TAG_NAME\\n```\\n\\nOr\\n\\n```bash\\n# for amd64 systems\\ndocker run -d -p 8000:8000 pejmans21/ls-fastapi:0.1.0\\n\\n#### OR\\n\\n# for arm64 systems\\ndocker run -d -p 8000:8000 pejmans21/ls-fastapi:aarch64\\n```\\n\\n---\\n\\n## Kubernetes\\n\\n```bash\\nkubectl apply -f ls-fastapi-k8s-config.yaml\\n```\\n\\nto see output\\n\\n```bash\\nkubectl port-forward service/lsapi-service 8000\\n```\\n\\n> Now check http://127.0.0.1:8000/\\n\\n### Stop process\\n\\n```bash\\nkubectl delete -f ls-fastapi-k8s-config.yaml\\n```"},{"id":"face-recognition","metadata":{"permalink":"/blog/face-recognition","editUrl":"https://github.com/pejmanS21/pejmans21.github.io/tree/main/blog/2022-08-20-FaceRecognition_Django/index.md","source":"@site/blog/2022-08-20-FaceRecognition_Django/index.md","title":"FaceRecognition_Django","description":"- Repository on GitHub.","date":"2022-08-20T00:00:00.000Z","formattedDate":"August 20, 2022","tags":[{"label":"PyTorch","permalink":"/blog/tags/py-torch"},{"label":"Django","permalink":"/blog/tags/django"},{"label":"Docker","permalink":"/blog/tags/docker"}],"readingTime":0.965,"hasTruncateMarker":false,"authors":[{"name":"Pajman Samadi","title":"DevOps / MLOps Engineer @ AiMedic","url":"https://pejmans21.github.io","imageURL":"https://avatars.githubusercontent.com/u/73995528?s=96&v=4","key":"pejmans21"}],"frontMatter":{"slug":"face-recognition","title":"FaceRecognition_Django","authors":["pejmans21"],"tags":["PyTorch","Django","Docker"]},"prevItem":{"title":"LS-Fastapi","permalink":"/blog/ls-fastapi"}},"content":":::info summary\\n\\n- Repository on [GitHub](https://github.com/pejmanS21/FaceRecognition_Django).\\n- A FaceRecognition module written with facenet pytorch.\\n- Use Django as the web framework.\\n- Dockerized project.\\n:::\\n\\n## Module\\n\\n```python\\nfrom face_encoder import FaceEncoder\\n\\n# Load the module\\nFE = FaceEncoder(\'/path/to/main_folder_people/\', img_size=160, recognition_threshold=0.3)\\n\\n# Read images in people folder to create a database\\nencodes_db = FE.db_prepare(show_face=True, save_file=True, encoding_file_path=\'./data/encodes_db.pt\')\\n\\n\\"\\"\\"--- Different ways to send an input to get results ---\\"\\"\\"\\n\\n# Image path as string\\nimage = FE.recognizer(\'/path/to/image\', encodes_db, pil_write=True)\\n# PIL.Image\\nimage = FE.recognizer(Image.open(\'/path/to/image\'), encodes_db, pil_write=True)\\n# numpy image\\nimage = FE.recognizer(np.array(unknown_image), encodes_db, pil_write=True)\\n```\\n\\n## Colab\\n\\n> **_For testing the module yourself, open the prepared jupyter notebook in colab via the following link_**\\n\\n<a href=\\"https://colab.research.google.com/drive/1hQkR1-QIyMRHnsTM2NBc75UOgoF-cpRc?usp=sharing\\" target=\\"_parent\\"><img src=\\"https://colab.research.google.com/assets/colab-badge.svg\\" alt=\\"Open In Colab\\"/></a>\\n\\n## Usage\\n\\n> **_First_**: install requirements.txt\\n\\n```bash\\n$ pip3 install -r requirements.txt\\n```\\n\\nthen in your local computer to start `Django` server run following commands in your terminal:\\n\\n1- **makemigrations**\\n\\n```bash\\n$ python3 manage.py makemigrations\\n```\\n\\n2- **migrate**\\n\\n```bash\\n$ python3 manage.py migrate\\n```\\n\\n> Optional\\n\\n- **createsuperuser**\\n\\n```bash\\n$ python3 manage.py createsuperuser\\n```\\n\\n3- **runserver**\\n\\n```bash\\n$ python manage.py runserver 0.0.0.0:8000\\n```\\n\\n## Docker\\n\\n```bash\\n$ docker-compose up --build\\n```\\n\\n## UI\\n\\n![img](./FRDjango.gif)"}]}')}}]);