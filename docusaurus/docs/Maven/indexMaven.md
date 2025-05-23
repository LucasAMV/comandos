---
#sidebar_label: ''
sidebar_position: 1
---

# Comandos

```bash title="Obtém uma lib específica via CLI:"
mvn dependency:get -DgroupId=br.com.site -DartifactId=pacote-ferramentas -Dversion=1.0.8 -DremoteRepositories=https://nexus.devcansado.com.br/repository/maven-public/
```

```bash title="Envia uma lib/war para um repositório Maven:"
mvn deploy:deploy-file -DgroupId=br.com.site -DartifactId=pacote-ferramentas -Dversion=1.0.0 -Dfile=./caixa-ferramentas.lib -Durl=https://algumUsuarioPlain:algumaSenhaPlain@nexus.devcansado.com.br/repository/repositorioNome
```

```bash title="Analisa um projeto usando Sonarqube sem precisar instalar nele o plugin:"
mvn org.sonarsource.scanner.maven:sonar-maven-plugin:3.7.0.1746:sonar -Dsonar.projectKey=project_key -Dsonar.projectName=devcansado -Dsonar.host.url=https://sonarqube.devcansado.com.br -Dsonar.token=algumToken
```

```bash title="Variante do mesmo comando que especifica a jdk necessária pelo plugin:"
JAVA_HOME=/home/devcansado/Dev/Java/jdk-17.0.2 mvn org.sonarsource.scanner.maven:sonar-maven-plugin:3.7.0.1746:sonar -Dsonar.projectKey=project_key -Dsonar.projectName=devcansado -Dsonar.host.url=https://sonarqube.devcansado.com.br -Dsonar.token=algumToken
```

```bash title="Executa o Maven de uma imagem Docker. Evita usar root e reaproveita o repositório local do SO."
docker run --pull always --tty --rm -u 1000 --name maven-build --network=host \
  -v $(pwd):/usr/src/mymaven -v ~/.m2:/var/maven/.m2:rw \
  -e MAVEN_CONFIG=/var/maven/.m2 -w /usr/src/mymaven maven:3-amazoncorretto-8 \
  mvn -Duser.home=/var/maven clean package -DskipTests=true \
  -P profile1,profile2 -Dproperty1=false -Dproperty2=true
```