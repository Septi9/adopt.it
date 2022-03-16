FROM openjdk:17
ADD target/backend-1.0-SNAPSHOT.jar app.jar
COPY --chown=appuser:appuser target/**.jar /home/appuser/app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]

