#FROM openjdk:17
#COPY ./Back-end/target/backend-1.0-SNAPSHOT.jar app.jar
#EXPOSE 8080
#ENTRYPOINT ["java", "-jar", "/app.jar"]


FROM openjdk:17 AS build  
RUN apt-get update
RUN apt-get install -y maven
COPY ./Back-end/src src
COPY ./Back-end/pom.xml pom.xml
RUN mvn -B package -f /Back-end/pom.xml

FROM gcr.io/distroless/java  
COPY --from=build ./Back-end/target/backend-1.0-SNAPSHOT.jar app.jar 
EXPOSE 8080  
ENTRYPOINT ["java","-jar","/app.jar"]  

