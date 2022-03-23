# datomspod (home)
datomspod，「数悦坊」实现数据资产安全、可信和隐私保护使用和交收的一种工具。


## 如何使用

1. k8s已经运行
2. 运行如下k8s deployments
```bash
$ kubectl create ns datomspod
$ kubectl config set-context --current --namespace datomspod 
$ kubectl apply -f k8s/name_space.yml
$ kubectl apply -f k8s/binding.yml
$ kubectl apply -f k8s/todojob.yml
```
3. kubectl exec -it datomspod-xxxx-xxx(kubectl get pods得到的pod id ) bash

// test
```bash
$ curl -sL https://deb.nodesource.com/setup_14.x — Node.js 14 LTS "Fermium" | bash -  //指定nodejs的源

Run `sudo apt-get install -y nodejs` to install Node.js 14.x and npm

## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn
```

4. 安装datomspace
```bash
$ npm i datomsapce
```
然后就可以用datomspace的协议运行各种app.

5. 从datomspod中远程访问 datoms;
6. 在datomspod中建立datomSpaceServer；

### 示例
1. 部署一个datomspod: ID为datomspod-todojob-5fcbf874cf-9s27l
2. 进入pod: 
```bash
docker exec -it datomspod-todojob-5fcbf874cf-9s27l bash
```
3. 建立datomspaceserver和发布datoms
```bash
node datomSpacerServer.js
node create_datoms.js //创建新的datoms
node access_datoms.js //接受外部datoms
```
5. 输入算法对datoms中的数据进行计算和处理。








