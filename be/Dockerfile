FROM openjdk:11.0.11
COPY ./build/libs/*.jar airbnb.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=deploy-mysql", "airbnb.jar"]
